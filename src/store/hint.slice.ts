import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../utils/localStorage';

const getHintIsOpen = () => {
	return loadState<boolean>('hintIsOpen') || true;
};

const initialState: boolean = getHintIsOpen();

export const hintSlice = createSlice({
	name: 'hint',
	initialState,
	reducers: {
		set: (state, action) => action.payload
	}
});

export const { set } = hintSlice.actions;
export default hintSlice.reducer;