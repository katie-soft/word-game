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

import styles from './RoundPage.module.css';

function RoundPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);

	const wordId = getIdFromLocation(useLocation().pathname) || 'error';

	let initialRoundScore: number;

	if (currentRoundNumber === 2 || currentRoundNumber === 5) {
		initialRoundScore = 6;
	} else {
		initialRoundScore = 0;
	}

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

	const addBonusPoint = () => {
		if (roundScore === 6) {
			return roundScore + 1;
		}
		return roundScore;
	};
  
	return (<div className={styles.wrapper}>

		<RoundLabel />
		{isChecking && <span>Счет: {roundScore}</span>}
		{!isBlitz && <WordLabel wordId={wordId}></WordLabel>}

		<WordList wordId={wordId} isChecking={isChecking} updateScore={updateScore}></WordList>

		{!isChecking && 
		<Button onClick={() => {
			dispatch(gameActions.addWords(['1', '2', '3', '4', '5', '6']));
			setIsChecking(true);
		}}>Готово</Button>}

		{isChecking && 
		<Button onClick={() => {
			dispatch(gameActions.finishRound(addBonusPoint()));
			navigate('/round-results');
		}}>К результатам</Button>}

	</div>);
}

export default RoundPage;