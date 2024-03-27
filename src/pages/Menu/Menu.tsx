import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MenuButton from '../../components/MenuButton/MenuButton';
import Modal from '../../components/Modal/Modal';
import { AppDispatch } from '../../store/store';
import { gameActions } from '../../store/game.slice';

import styles from './Menu.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import CloseButton from '../../components/CloseButton/CloseButton';
import { loadState } from '../../utils/localStorage';
import { set } from '../../store/hint.slice';

function Menu() {

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const start = () => {
		dispatch(gameActions.startNewGame());
		if (!loadState('hintIsOpen')) {
			dispatch(set(true));
		}
		navigate('/new-game');
	};

	return (
		<div className={styles.wrapper}>
			<PageTitle>Игра в ассоциации</PageTitle>
			<div className={styles.buttons}>
				<MenuButton variant='start' onClick={() => start()} />
				<MenuButton variant='proceed' onClick={() => navigate('/continue')}>Продолжить</MenuButton>
				<MenuButton variant='rules' onClick={() => setIsModalOpen(true)} />
			</div>
			<Modal isOpen={isModalOpen}>
				<p>Здесь будут правила игры</p>
				<CloseButton onClick={() => setIsModalOpen(false)} />
			</Modal>
		</div>
	);
}

export default Menu;