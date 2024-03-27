import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button/Button';
import CodeInput from '../../components/CodeInput/CodeInput';
import Hint from '../../components/Hint/Hint';
import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Navigation from '../../components/Navigation/Navigation';
import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';

import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { loadState } from '../../utils/localStorage';
import { checkWordMatchesRound, getWordById } from '../../utils/getWordById';

function InputPage() {

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	if (!loadState('gameData')) {
		dispatch(gameActions.startNewGame());
	}

	const [wordId, setWordId] = useState('');
	const [isError, setIsError] = useState(false);
	const [hintIsOpen, setHintIsOpen] = useState(true);

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);

	const isCodeCorrect = (code: string) => {
		return getWordById(code) && checkWordMatchesRound(code, currentRoundNumber);
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

	const goBack = () => {
		dispatch(gameActions.setRoundScene(''));
		if (currentRoundNumber === 1) {
			navigate('/new-game');
		} else {
			dispatch(gameActions.decreaseRoundNumber());
			navigate('/round-results');
		}
	};

	return (
		<Layout>
			<RoundLabel></RoundLabel>
			<Wrapper hasTopOffset>
				<Hint isVisible={hintIsOpen} 
					close={() => setHintIsOpen(false)}>Введите код слова, которое выбрал ведущий игрок</Hint>
				<CodeInput value={wordId} onChange={setWordCode}></CodeInput>
				{isError && <Hint isVisible={true} isError close={() => setHintIsOpen(false)}>Неверный код. Попробуйте еще раз</Hint>}
				<Button text='Далее' variant='primary' onClick={proceedWithCode} />
			</Wrapper>
			<Navigation toggleHint={() => setHintIsOpen(!hintIsOpen)} goBack={goBack}/>
		</Layout>
	
	);
}

export default InputPage;