import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import WordLabel from '../../components/WordLabel/WordLabel';
import Button from '../../components/Button/Button';
import WordList from '../../components/WordList/WordList';
import Hint from '../../components/Hint/Hint';
import IconButton from '../../components/IconButton/IconButton';

import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { getIdFromLocation } from '../../utils/getIdFromLocation';
import { addBonusPoint, initialScore } from '../../utils/score';
import { isRoundGoalMatch } from '../../utils/roundInfo';

import styles from './RoundPage.module.css';
import Confirmation from '../../components/Confirmation/Confirmation';

function RoundPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const savedWordList = useSelector((state: RootState) => state.game.rounds.filter(item => item.roundNumber === currentRoundNumber)[0].words);

	const wordId = getIdFromLocation(useLocation().pathname) || 'error';
	const initialRoundScore = initialScore(currentRoundNumber);
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
			if (isChecked) {
				setScore(roundScore - 1);
			} else {
				setScore(roundScore + 1);
			}
		} else {
			if (!isChecked) {
				setScore(roundScore - 1);
			} else {
				setScore(roundScore + 1);
			}
		}
	};

	const button = !isChecking ? 
		<Button onClick={proceedToCheck}>Готово</Button> : 
		<Button onClick={proceedToResults}>К результатам</Button>;

	return (<div className={styles.wrapper}>

		<div className={styles.header}>
			<RoundLabel />
			<div className={styles.buttons}>
				<IconButton variant={'info'} onClick={() => setHintIsOpen(!hintIsOpen)} />
				<IconButton variant={'home'} />
			</div>
		</div>

		<Hint 
			isVisible={hintIsOpen} 
			close={() => setHintIsOpen(false)}>
			{hintText}
		</Hint>

		{isChecking && 
			<span>Счет: {roundScore}</span>
		}
		{!isBlitz && <WordLabel wordId={wordId}></WordLabel>}

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

	</div>);
}

export default RoundPage;