import { configureStore } from '@reduxjs/toolkit';
import { saveState } from '../utils/localStorage';
import gameSlice from './game.slice';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
	reducer: {
		game: gameSlice
	}
});

store.subscribe(() => {
	saveState(store.getState().game, 'gameData');
});