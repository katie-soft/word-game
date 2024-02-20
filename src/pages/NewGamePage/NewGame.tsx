import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './NewGame.module.css';
import Hint from '../../components/Hint/Hint';
import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/game.slice';

function NewGame() {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Новая игра</h2>
			<Hint isVisible>Если вы ведущий игрок, нажмите "Выбрать&nbsp;слово".<br></br> Остальные игроки нажимают "Ввести&nbsp;код". </Hint>
			<Button onClick={() => {
				dispatch(gameActions.setRoundScene('word-select'));
				navigate('/start');}
			}>Выбрать слово</Button>
			<Button onClick={() => {
				dispatch(gameActions.setRoundScene('code-input'));
				navigate('/code');
			}}>Ввести код</Button>
			<Button onClick={() => navigate('/')}>Вернуться в меню</Button>
		</div>
	);
}

export default NewGame;