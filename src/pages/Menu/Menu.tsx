import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { AppDispatch } from '../../store/store';
import { gameActions } from '../../store/game.slice';

import styles from './Menu.module.css';

function Menu() {

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Меню</h2>
			<Button onClick={() => {
				dispatch(gameActions.startNewGame());
				navigate('/start');
			}}>Новая игра</Button>
			<Button onClick={() => navigate('/code')}>Ввести код</Button>
			<Button onClick={() => navigate('/continue')}>Продолжить</Button>
			<Button onClick={() => setIsModalOpen(true)}>Правила</Button>
			<Modal open={isModalOpen}>
				<p>Здесь будут правила игры</p>
				<button className={styles.close} onClick={() => setIsModalOpen(false)}></button>
			</Modal>
		</div>
	);
}

export default Menu;