import { useDispatch } from 'react-redux';
import { gameActions, savedState } from '../store/game.slice';

export const useSavedGame = () => {
	const dispatch = useDispatch();

	if (savedState) {
		dispatch(gameActions.startSavedGame());
	}
};