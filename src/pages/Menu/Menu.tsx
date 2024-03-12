import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MenuButton from '../../components/MenuButton/MenuButton';
import Modal from '../../components/Modal/Modal';
import { AppDispatch } from '../../store/store';
import { gameActions } from '../../store/game.slice';

import styles from './Menu.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';

function Menu() {

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={styles.wrapper}>
			<PageTitle>Игра в ассоциации</PageTitle>
			<div className={styles.buttons}>
				<MenuButton variant='start' onClick={() => {
					dispatch(gameActions.startNewGame());
					navigate('/new-game');
				}} />
				<MenuButton variant='proceed' onClick={() => navigate('/continue')}>Продолжить</MenuButton>
				<MenuButton variant='rules' onClick={() => setIsModalOpen(true)} />
			</div>
			<Modal open={isModalOpen}>
				<p>Здесь будут правила игры</p>
				<button className={styles.close} onClick={() => setIsModalOpen(false)}></button>
			</Modal>
		</div>
	);
}

export default Menu;