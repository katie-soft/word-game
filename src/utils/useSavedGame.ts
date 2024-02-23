import { useDispatch } from 'react-redux';
import { gameActions } from '../store/game.slice';

export const useSavedGame = () => {
	const dispatch = useDispatch();

	dispatch(gameActions.startSavedGame());
};