import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Button from '../../components/Button/Button';
import WordList from '../../components/WordList/WordList';
import Hint from '../../components/Hint/Hint';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import Modal from '../../components/Modal/Modal';
import CloseButton from '../../components/CloseButton/CloseButton';
import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';

import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { getIdFromLocation } from '../../utils/getIdFromLocation';
import { addBonusPoint, increaseScore, decreaseScore, initialScore } from '../../utils/score';
import { checkIsBlitz, isRoundGoalMatch } from '../../utils/roundInfo';
import { getWordById } from '../../utils/getWordById';
import { confirmationText, showHintText } from '../../utils/showHintText';
import { Word } from '../../types/Word.types';

import styles from './RoundPage.module.css';

function RoundPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const savedWordList = useSelector((state: RootState) => state.game.rounds.filter(item => item.roundNumber === currentRoundNumber)[0].words);

	const wordId = getIdFromLocation(useLocation().pathname) || 'error';
	const wordItem: Word = getWordById(wordId); 
	const wordsFilled = savedWordList.filter(word => word.length);
		
	const isBlitz = checkIsBlitz(currentRoundNumber);

	const [isChecking, setIsChecking] = useState(false);
	const [roundScore, setScore] = useState(0);

	const hintText = showHintText(isChecking, currentRoundNumber);

	const [confirmation, setConfirmation] = useState(false);

	const noEmptyCells = () => {
		for (let i = 0; i < savedWordList.length; i++) {
			if (savedWordList[i].length === 0) {
				return false;
			}
		}
		return true;
	};

	const checkEmptyCells = () => {
		setScore(initialScore(currentRoundNumber, wordsFilled.length));
		if (noEmptyCells()) {
			proceedToCheck();
		} else {
			setConfirmation(true);
		}
	};

	const proceedToCheck = () => {
		setConfirmation(false);
		setIsChecking(true);
		dispatch(gameActions.setRoundScene('score-count'));
	};
	
	const handleEnter = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
		if (event.key === 'Enter') {
			checkEmptyCells();
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
			{isChecking ? <RoundLabel score={roundScore} /> : <RoundLabel wordId={wordId}/>}
			
			<Wrapper>
				{!isBlitz &&<PageTitle>{wordItem.word}</PageTitle>}
				<Hint>
					{hintText}
				</Hint>

				<WordList
					tabIndex={1}
					wordId={wordId}
					isChecking={isChecking}
					updateScore={updateScore}
					startWords={savedWordList}
					handleEnter={handleEnter}
				></WordList>

				{confirmation ? <Modal isOpen={confirmation}>
					<p>{confirmationText}</p>
					<CloseButton onClick={() => setConfirmation(false)} />
					<div className={styles.buttons}>
						<Button text='Отменить' variant='transparent' onClick={() => setConfirmation(false)}></Button>
						<Button text='Перейти к подсчету' variant='transparent' onClick={() => proceedToCheck()}></Button>
					</div>
				</Modal> : button}
			</Wrapper>
			<Navigation goBack={goBack} />
		</Layout>
	);
}

export default RoundPage;