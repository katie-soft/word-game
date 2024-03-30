import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';

import Button from '../../components/Button/Button';
import Hint from '../../components/Hint/Hint';
import MenuButton from '../../components/MenuButton/MenuButton';
import PageTitle from '../../components/PageTitle/PageTitle';
import Navigation from '../../components/Navigation/Navigation';

import styles from './RoundResults.module.css';
import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';

function RoundResultsPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber, rounds, totalScore } = useSelector((state: RootState) => state.game);
	const roundScore = rounds.filter(item => item.roundNumber === currentRoundNumber)[0].roundScore;

	const isGameEnd = () => {
		return currentRoundNumber === 6;
	};

	const wordId = rounds.filter(item => item.roundNumber === currentRoundNumber)[0].roundWordId;

	const goBack = () => {
		dispatch(gameActions.setRoundScene('score-count'));
		navigate(`/round/${wordId}`);
	};

	return (<Layout>
		<Wrapper>
			<PageTitle>Раунд {currentRoundNumber}/6 окончен</PageTitle>
			<p className={styles.result}>Ваш счет в этом раунде: {roundScore}</p>
			<p className={styles.result}>Промежуточный счет за всю игру: {totalScore}</p>
			{!isGameEnd() && <>
				<Hint>
					Если вы ведущий игрок в следующем раунде, нажмите "Выбрать слово". Остальные игроки нажимают "Ввести код"
				</Hint>
				<div className={styles['button-wrapper']}>
					<MenuButton variant='select' onClick={() => {
						dispatch(gameActions.increaseRoundNumber());
						navigate('/start');
					}} />
					<MenuButton variant='code' onClick={() => {
						dispatch(gameActions.increaseRoundNumber());
						navigate('/code');
					}} />
				</div>
			</>}

			{isGameEnd() && <Button text='Результаты игры' variant='primary' onClick={() => navigate('/game-results')} />}
		</Wrapper>
		<Navigation goBack={goBack}/>
	</Layout>
	);}

export default RoundResultsPage;