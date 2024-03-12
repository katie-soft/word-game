import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Button from '../../components/Button/Button';
import WordList from '../../components/WordList/WordList';
import Hint from '../../components/Hint/Hint';
import Confirmation from '../../components/Confirmation/Confirmation';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';

import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { getIdFromLocation } from '../../utils/getIdFromLocation';
import { addBonusPoint, increaseScore, decreaseScore, initialScore } from '../../utils/score';
import { isRoundGoalMatch } from '../../utils/roundInfo';

import styles from './RoundPage.module.css';
import { getWordById } from '../../utils/getWordById';
import { Word } from '../../types/Word.types';

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
		if (noEmptyCells()) {
			setIsChecking(true);
			dispatch(gameActions.setRoundScene('score-count'));
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

	// const goBack = () => {
	// 	dispatch(gameActions.setRoundScene('code-input'));
	// 	navigate('/code');
	// };

	const button = !isChecking ? 
		<Button text="Готово" variant="primary" onClick={proceedToCheck} />: 
		<Button text="К результатам" variant="primary" onClick={proceedToResults} />;

	return (<>
		<RoundLabel />
		<div className={styles.wrapper}>
			{!isBlitz &&<PageTitle>{wordItem.word}</PageTitle>}
			<Hint 
				isVisible={hintIsOpen} 
				close={() => setHintIsOpen(false)}>
				{hintText}
			</Hint>

			{isChecking && <span>Счет: {roundScore}</span>}

			<WordList 
				wordId={wordId} 
				isChecking={isChecking} 
				updateScore={updateScore}
				startWords={savedWordList}
			></WordList>

			{confirmation ? <Confirmation 
				text={confirmationText}
				onConfirm={() => {
					setIsChecking(true);
					setConfirmation(false);
				}}
				onReject={() => setConfirmation(false)}
			></Confirmation> : button }
		</div>
		<Navigation />
	</>);
}

export default RoundPage;