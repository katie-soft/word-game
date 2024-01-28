import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import WordLabel from '../../components/WordLabel/WordLabel';
import Button from '../../components/Button/Button';
import WordList from '../../components/WordList/WordList';

import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { getIdFromLocation } from '../../utils/getIdFromLocation';
import { addBonusPoint, initialScore } from '../../utils/score';

import styles from './RoundPage.module.css';

function RoundPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);

	const wordId = getIdFromLocation(useLocation().pathname) || 'error';
	const initialRoundScore = initialScore(currentRoundNumber);
	const isBlitz = currentRoundNumber === 3 || currentRoundNumber === 6;

	const [isChecking, setIsChecking] = useState(false);
	const [roundScore, setScore] = useState(initialRoundScore);

	const updateScore = (isChecked: boolean) => {
		if (currentRoundNumber === 2 || currentRoundNumber === 5) {
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

	return (<div className={styles.wrapper}>

		<RoundLabel />
		{isChecking && <span>Счет: {roundScore}</span>}
		{!isBlitz && <WordLabel wordId={wordId}></WordLabel>}

		<WordList 
			wordId={wordId} 
			isChecking={isChecking} 
			updateScore={updateScore}
		></WordList>

		{!isChecking && 
		<Button type='submit' onClick={() => {
			setIsChecking(true);
		}}>Готово</Button>}

		{isChecking && 
		<Button onClick={() => {
			dispatch(gameActions.finishRound(addBonusPoint(roundScore)));
			navigate('/round-results');
		}}>К результатам</Button>}

	</div>);
}

export default RoundPage;