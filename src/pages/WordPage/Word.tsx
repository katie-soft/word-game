import { useLocation, useNavigate } from 'react-router-dom';
import { getIdFromLocation } from '../../utils/getIdFromLocation';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Hint from '../../components/Hint/Hint';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import IconButton from '../../components/IconButton/IconButton';

import styles from './Word.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../store/game.slice';
import { RootState } from '../../store/store';

function WordPage() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const wordId = getIdFromLocation(useLocation().pathname) || 'error';
	const { currentRoundNumber } = useSelector((state: RootState) => state.game);

	const goBack = () => {
		dispatch(gameActions.setRoundScene(''));
		if (currentRoundNumber === 1) {
			navigate('/new-game');
		} else {
			dispatch(gameActions.decreaseRoundNumber());
			navigate('/round-results');
		}
	};

	return <div className={styles.wrapper}>
		<div className={styles.header}>
			<RoundLabel />
			<div className={styles.buttons}>
				<IconButton variant='back' onClick={goBack} />
				<IconButton variant='home' />
			</div>
		</div>
		<Card wordId={wordId}/>
		<div className={styles.code}>Код слова: {wordId}</div>
		<Hint isVisible={true}>Скажите этот код другим участникам</Hint>
		<Button onClick={() => {
			dispatch(gameActions.setRoundScene('word-input'));
			navigate(`/round/${wordId}`);
		}}>Далее</Button>
	</div>;
}

export default WordPage;