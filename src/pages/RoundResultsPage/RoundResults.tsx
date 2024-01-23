import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './RoundResults.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';

function RoundResultsPage() {

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const roundScore = useSelector((state: RootState) => state.game.rounds.filter(item => item.roundNumber === currentRoundNumber)[0].roundScore);

	const isGameEnd = () => {
		return currentRoundNumber === 6;
	};

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className= {styles.wrapper}>
			<p>Раунд {currentRoundNumber}/6 окончен</p>
			<p>Ваш счет: {roundScore}</p>
			<div className={styles['button-wrapper']}>
				{!isGameEnd() && <>
					<Button onClick={() => {
						dispatch(gameActions.increaseRoundNumber());
						navigate('/start');
					}}>
					Начать раунд</Button>
					<Button onClick={() => {
						dispatch(gameActions.increaseRoundNumber());
						navigate('/code');
					}}>
					Ввести код</Button>
				</>}

				{isGameEnd() && <Button onClick={() => navigate('/game-results')}>Результаты игры</Button>}
			</div>
		</div>
	);}

export default RoundResultsPage;