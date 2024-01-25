import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Card from '../../components/Card/Card';
import { words } from '../../data/words';
import { getRandomArrayElement } from '../../utils/random';
import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { getRoundType } from '../../utils/roundInfo';

import styles from './Start.module.css';

function Start() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);

	const currentRoundType = getRoundType(currentRoundNumber);
  
	const wordIds: string[] = [];
	const exceptions: string[] = [];

	const randomWordSelect = () => {
		const wordList = words.filter(word => word.roundId === currentRoundType && !exceptions.includes(word.id));
		const newWord = getRandomArrayElement(wordList);
		wordIds.push(newWord.id);
		exceptions.push(newWord.id);
	};
	randomWordSelect();
	randomWordSelect();

	const [ firstWord, secondWord ] = wordIds;

	return (
		<div className={styles.wrapper}>
			<RoundLabel></RoundLabel>	
			<Card wordId={firstWord} onClick={() => {
				dispatch(gameActions.startRound());
				dispatch(gameActions.setWordId(firstWord));
				navigate(`/words/${firstWord}`);
			}}></Card>
			<Card wordId={secondWord} onClick={() => {
				dispatch(gameActions.startRound());
				dispatch(gameActions.setWordId(secondWord));
				navigate(`/words/${secondWord}`);
			}}></Card>
		</div>
	);
}

export default Start;