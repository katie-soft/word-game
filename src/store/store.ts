import { configureStore } from '@reduxjs/toolkit';
import { saveState } from '../utils/localStorage';
import gameSlice from './game.slice';
import hintSlice from './hint.slice';
import randomSlice from './random.slice';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
	reducer: {
		game: gameSlice,
		hint: hintSlice,
		random: randomSlice
	}
});

store.subscribe(() => {
	saveState(store.getState().game, 'gameData');
	saveState(store.getState().hint, 'hint');
	saveState(store.getState().random, 'wordRandom');
});