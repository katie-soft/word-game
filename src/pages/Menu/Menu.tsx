import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { gameActions } from '../../store/game.slice';

function Menu() {

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Меню</h2>
			<Button onClick={() => {
				dispatch(gameActions.startGame());
				navigate('/start');
			}}>Новая игра</Button>
			<Button onClick={() => navigate('/code')}>Ввести код</Button>
			<Button onClick={() => navigate('/continue')}>Продолжить</Button>
			<Button onClick={() => setIsModalOpen(true)}>Правила</Button>
			<Modal open={isModalOpen}>
				<p>Правила</p>
				<button onClick={() => setIsModalOpen(false)}>x</button>
			</Modal>
		</div>
	);
}

export default Menu;