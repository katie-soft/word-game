import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';

import Button from '../../components/Button/Button';
import HomeButton from '../../components/HomeButton/HomeButton';

import styles from './RoundResults.module.css';
import Hint from '../../components/Hint/Hint';

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
			<div className= {styles.header}>
				<HomeButton />
			</div>
			<p>Раунд {currentRoundNumber}/6 окончен</p>
			<p>Ваш счет: {roundScore}</p>
			<div className={styles['button-wrapper']}>
				{!isGameEnd() && <>
					<Hint>Если вы ведущий игрок в следующем раунде, нажмите "Выбрать слово". Остальные игроки нажимают "Ввести код"</Hint>
					<Button onClick={() => {
						dispatch(gameActions.increaseRoundNumber());
						navigate('/start');
					}}>
					Выбрать слово</Button>
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