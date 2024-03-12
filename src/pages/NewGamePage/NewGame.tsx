import { useNavigate } from 'react-router-dom';

import Hint from '../../components/Hint/Hint';
import RoundLabel from '../../components/RoundLabel/RoundLabel';
import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/game.slice';

import styles from './NewGame.module.css';
import MenuButton from '../../components/MenuButton/MenuButton';
import Navigation from '../../components/Navigation/Navigation';

function NewGame() {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<>
			<RoundLabel />
			<div className={styles.wrapper}>
				<Hint isVisible>Если вы ведущий игрок, нажмите "Выбрать&nbsp;слово".<br></br> Остальные игроки нажимают "Ввести&nbsp;код". </Hint>
				<div className={styles.buttons}>
					<MenuButton variant='select' onClick={() => {
						dispatch(gameActions.setRoundScene('word-select'));
						navigate('/start');}
					} />
					<MenuButton variant='code' onClick={() => {
						dispatch(gameActions.setRoundScene('code-input'));
						navigate('/code');
					}} />
				</div>
			</div>
			<Navigation />
		</>
		
	);
}

export default NewGame;