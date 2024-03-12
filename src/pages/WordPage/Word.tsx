import { useLocation, useNavigate } from 'react-router-dom';
import { getIdFromLocation } from '../../utils/getIdFromLocation';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Hint from '../../components/Hint/Hint';
import MenuButton from '../../components/MenuButton/MenuButton';

import styles from './Word.module.css';
import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/game.slice';
// import { RootState } from '../../store/store';
import PageTitle from '../../components/PageTitle/PageTitle';
import { getWordById } from '../../utils/getWordById';
import { Word } from '../../types/Word.types';
import Navigation from '../../components/Navigation/Navigation';


function WordPage() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const wordId = getIdFromLocation(useLocation().pathname) || 'error';
	const wordItem: Word = getWordById(wordId);
	// const { currentRoundNumber } = useSelector((state: RootState) => state.game);

	// const goBack = () => {
	// 	dispatch(gameActions.setRoundScene(''));
	// 	if (currentRoundNumber === 1) {
	// 		navigate('/new-game');
	// 	} else {
	// 		dispatch(gameActions.decreaseRoundNumber());
	// 		navigate('/round-results');
	// 	}
	// };

	return <>
		<RoundLabel />
		<div className={styles.wrapper}>
			<PageTitle>{wordItem.word}</PageTitle>
			<div className={styles.code}>Код слова: {wordId}</div>
			<Hint isVisible={true}>Скажите этот код другим участникам</Hint>
			<MenuButton variant='proceed' onClick={() => {
				dispatch(gameActions.setRoundScene('word-input'));
				navigate(`/round/${wordId}`);
			}} />
		</div>
		<Navigation />
	</>;
}

export default WordPage;