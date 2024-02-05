import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import CodeInput from '../../components/CodeInput/CodeInput';
import Hint from '../../components/Hint/Hint';
import IconButton from '../../components/IconButton/IconButton';

import { AppDispatch } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { loadState } from '../../utils/localStorage';
import { getWordById } from '../../utils/getWordById';

import styles from './InputPage.module.css';

function InputPage() {

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	if (!loadState('gameData')) {
		dispatch(gameActions.startNewGame());
	}

	const [wordId, setWordId] = useState('');
	const [isError, setIsError] = useState(false);
	const [hintIsOpen, setHintIsOpen] = useState(true);

	const isCodeCorrect = (code: string) => {
		return getWordById(code) ? true : false;
	};

	const proceedWithCode = () => {
		if (isCodeCorrect(wordId)) {
			setIsError(false);
			dispatch(gameActions.setRoundScene('word-input'));
			dispatch(gameActions.setWordId(wordId));
			navigate(`/round/${wordId}`);
		} else {
			setIsError(true);
		}
	};

	const setWordCode = (event: ChangeEvent<HTMLInputElement>) => {
		setWordId(event.target.value.toUpperCase());
	};

	return (<div className={styles.wrapper}>
		<div className={styles.header}>
			<div className={styles.buttons}>
				<IconButton variant={'info'} onClick={() => setHintIsOpen(!hintIsOpen)} />
				<IconButton variant={'home'} />
			</div>
		</div>

		<Hint isVisible={hintIsOpen} 
			close={() => setHintIsOpen(false)}>Введите код слова, которое выбрал ведущий игрок. В коде используются английские буквы и цифры</Hint>
		<CodeInput value={wordId} onChange={setWordCode}></CodeInput>
		{isError && <Hint isVisible={true} isError>Неверный код. Попробуйте еще раз. В коде используются английские буквы и цифры</Hint>}
		<Button onClick={proceedWithCode}>Далее</Button>
	</div>
	);
}

export default InputPage;