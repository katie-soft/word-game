import Button from '../../components/Button/Button';
import CodeInput from '../../components/CodeInput/CodeInput';
import Hint from '../../components/Hint/Hint';
import styles from './InputPage.module.css';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { loadState } from '../../utils/localStorage';
import { gameActions } from '../../store/game.slice';

function InputPage() {

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	if (!loadState('gameData')) {
		dispatch(gameActions.startGame());
	}

	const [wordId, setWordId] = useState(0);

	const setWordCode = (event: ChangeEvent<HTMLInputElement>) => {
		setWordId(Number(event.target.value));
	};

	return (<div className={styles.wrapper}>
		<Hint>Введите код слова, которое выбрал ведущий игрок</Hint>
		<CodeInput value={wordId} onChange={setWordCode}></CodeInput>
		<Button onClick={() => {
			dispatch(gameActions.startRound());
			dispatch(gameActions.setWordId(wordId));
			navigate(`/round/${wordId}`);
		}}>Далее</Button>
	</div>

	);
}

export default InputPage;