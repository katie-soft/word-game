import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './GameResults.module.css';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

function GameResultsPage() {

	const navigate = useNavigate();

	const { totalScore } = useSelector((state: RootState) => state.game);

	return (
		<div className={styles.wrapper}>
			<h2>Игра окончена</h2>
			<p>Ваш счет: {totalScore}</p>
			<Button text='На главную' variant='primary' onClick={() => {
				navigate('/');
			}} />
		</div>
	);
}

export default GameResultsPage;