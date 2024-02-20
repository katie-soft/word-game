import { useLocation, useNavigate } from 'react-router-dom';
import { getIdFromLocation } from '../../utils/getIdFromLocation';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Hint from '../../components/Hint/Hint';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import IconButton from '../../components/IconButton/IconButton';

import styles from './Word.module.css';
import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/game.slice';


function WordPage() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const wordId = getIdFromLocation(useLocation().pathname) || 'error';

	return <div className={styles.wrapper}>
		<div className={styles.header}>
			<RoundLabel />
			<IconButton variant='home' />
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