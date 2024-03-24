import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Button from '../../components/Button/Button';
import WordList from '../../components/WordList/WordList';
import Hint from '../../components/Hint/Hint';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';

import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { getIdFromLocation } from '../../utils/getIdFromLocation';
import { addBonusPoint, increaseScore, decreaseScore, initialScore } from '../../utils/score';
import { isRoundGoalMatch } from '../../utils/roundInfo';

import { getWordById } from '../../utils/getWordById';
import { Word } from '../../types/Word.types';
import Modal from '../../components/Modal/Modal';
import CloseButton from '../../components/CloseButton/CloseButton';
import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';

function RoundPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const savedWordList = useSelector((state: RootState) => state.game.rounds.filter(item => item.roundNumber === currentRoundNumber)[0].words);

	const wordId = getIdFromLocation(useLocation().pathname) || 'error';
	const wordItem: Word = getWordById(wordId); 
	const wordsFilled = savedWordList.filter(word => word.length);
	
	const initialRoundScore = initialScore(currentRoundNumber, wordsFilled.length);
	const isBlitz = currentRoundNumber === 3 || currentRoundNumber === 6;

	const [isChecking, setIsChecking] = useState(false);
	const [roundScore, setScore] = useState(initialRoundScore);

	const [hintIsOpen, setHintIsOpen] = useState(true);
	const hintTextStart = isRoundGoalMatch(currentRoundNumber) ? 'Придумайте такие ассоциации, которые совпадут с ассоциациями других игроков' : 'Придумайте такие ассоциации, которые НЕ совпадут с ассоциациями других игроков';
	const hintText = !isChecking ? hintTextStart : 'Отметьте те слова, которые совпали у вас и других игроков';

	const [confirmation, setConfirmation] = useState(false);
	const confirmationText = 'Уверены, что хотите перейти к подсчету очков?';

	const noEmptyCells = () => {
		for (let i = 0; i < savedWordList.length; i++) {
			if (savedWordList[i].length === 0) {
				return false;
			}
		}
		return true;
	};

	const proceedToCheck = () => {
		setConfirmation(false);
		setIsChecking(true);
		dispatch(gameActions.setRoundScene('score-count'));
	};

	const checkEmptyCells = () => {
		if (noEmptyCells()) {
			proceedToCheck();
		} else {
			setConfirmation(true);
		}
	};

	const proceedToResults = () => {
		dispatch(gameActions.finishRound(addBonusPoint(roundScore)));
		dispatch(gameActions.setRoundScene('final-score'));
		navigate('/round-results');
	};

	const updateScore = (isChecked: boolean) => {
		if (!isRoundGoalMatch(currentRoundNumber)) {
			isChecked ? setScore(decreaseScore(roundScore)) : setScore(increaseScore(roundScore));
		} else {
			!isChecked ? setScore(decreaseScore(roundScore)) : setScore(increaseScore(roundScore));
		}
	};

	const goBack = () => {
		dispatch(gameActions.setRoundScene('code-input'));
		navigate('/code');
	};

	const button = !isChecking ? 
		<Button text="Готово" variant="primary" onClick={checkEmptyCells} />: 
		<Button text="К результатам" variant="primary" onClick={proceedToResults} />;

	return (
		<Layout>
			{isChecking ? <RoundLabel score={roundScore} /> : <RoundLabel />}
			
			<Wrapper>
				{!isBlitz &&<PageTitle>{wordItem.word}</PageTitle>}
				<Hint 
					isVisible={hintIsOpen} 
					close={() => setHintIsOpen(false)}>
					{hintText}
				</Hint>

				<WordList
					wordId={wordId}
					isChecking={isChecking}
					updateScore={updateScore}
					startWords={savedWordList}
				></WordList>

				{confirmation ? <Modal isOpen={confirmation}>
					<p>{confirmationText}</p>
					<CloseButton onClick={() => setConfirmation(false)} />
					<Button text='Отменить' variant='transparent' onClick={() => setConfirmation(false)}></Button>
					<Button text='Перейти к подсчету' variant='transparent' onClick={() => proceedToCheck()}></Button>
				</Modal> : button}
			</Wrapper>
			<Navigation openHint={() => setHintIsOpen(true)} goBack={goBack} />
		</Layout>
	);
}

export default RoundPage;