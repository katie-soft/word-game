import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './NewGame.module.css';
import Hint from '../../components/Hint/Hint';
import HomeButton from '../../components/HomeButton/HomeButton';

function NewGame() {

	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<HomeButton />
			<h2 className={styles.title}>Новая игра</h2>
			<Hint>Если вы ведущий игрок, нажмите Выбрать слово.<br></br> Остальные игроки нажимают Ввести код </Hint>
			<Button onClick={() => navigate('/start')}>Выбрать слово</Button>
			<Button onClick={() => navigate('/code')}>Ввести код</Button>
		</div>
	);
}

export default NewGame;