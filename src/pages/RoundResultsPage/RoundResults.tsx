import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';

import Button from '../../components/Button/Button';
import Hint from '../../components/Hint/Hint';
import IconButton from '../../components/NavButton/NavButton';


import styles from './RoundResults.module.css';
import MenuButton from '../../components/MenuButton/MenuButton';

function RoundResultsPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber, rounds } = useSelector((state: RootState) => state.game);
	const wordId = rounds.filter(item => item.roundNumber === currentRoundNumber)[0].roundWordId;
	const roundScore = rounds.filter(item => item.roundNumber === currentRoundNumber)[0].roundScore;

	const isGameEnd = () => {
		return currentRoundNumber === 6;
	};

	const goBack = () => {
		dispatch(gameActions.setRoundScene('score-count'));
		navigate(`/round/${wordId}`);
	};

	return (
		<div className= {styles.wrapper}>
			<div className= {styles.header}>
				<IconButton variant='back' onClick={goBack} />
				<IconButton variant='home' />
			</div>
			<p>Раунд {currentRoundNumber}/6 окончен</p>
			<p>Ваш счет: {roundScore}</p>
			<div className={styles['button-wrapper']}>
				{!isGameEnd() && <>
					<Hint isVisible={true}>Если вы ведущий игрок в следующем раунде, нажмите "Выбрать слово". Остальные игроки нажимают "Ввести код"</Hint>
					<MenuButton variant='select' onClick={() => {
						dispatch(gameActions.increaseRoundNumber());
						navigate('/start');
					}} />
					<MenuButton variant='code' onClick={() => {
						dispatch(gameActions.increaseRoundNumber());
						navigate('/code');
					}} />
				</>}

				{isGameEnd() && <Button text='Результаты игры' variant='primary' onClick={() => navigate('/game-results')} />}
			</div>
		</div>
	);}

export default RoundResultsPage;