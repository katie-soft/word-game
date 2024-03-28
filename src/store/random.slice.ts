import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../utils/localStorage';

const getWordList = () => {
	return loadState<string[]>('wordRandom') || [];
};

const initialState: string[] = getWordList();

export const randomSlice = createSlice({
	name: 'wordRandom',
	initialState,
	reducers: {
		addWord: (state, action) => {
			if (state.length > 20) {
				state.shift();
			}
			state.push(action.payload);			
		}
	}
});

export const { addWord } = randomSlice.actions;
export default randomSlice.reducer;