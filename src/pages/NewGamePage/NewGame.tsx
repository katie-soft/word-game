import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './NewGame.module.css';
import Hint from '../../components/Hint/Hint';

function NewGame() {

	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Новая игра</h2>
			<Hint>Если вы ведущий игрок, нажмите "Выбрать&nbsp;слово".<br></br> Остальные игроки нажимают "Ввести&nbsp;код". </Hint>
			<Button onClick={() => navigate('/start')}>Выбрать слово</Button>
			<Button onClick={() => navigate('/code')}>Ввести код</Button>
			<Button onClick={() => navigate('/')}>Вернуться в меню</Button>
		</div>
	);
}

export default NewGame;