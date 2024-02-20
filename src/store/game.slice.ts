import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from '../utils/localStorage';
import { newWord } from '../types/Word.types';

export type RoundScene = 'word-select' | 'show-code' | 'code-input' | 'word-input' | 'score-count' | 'final-score' | '';

export type RoundData = {
  roundNumber: number;
  roundScene: RoundScene,
	roundWordId: string,
	words: string[],
	roundScore: number
}

export type GameState = {
  currentRoundNumber: number;
  totalScore: number;
  rounds: RoundData[]
}

export const savedState = loadState<GameState>('gameData');
console.log(savedState);

const initialState: GameState = {
	currentRoundNumber: 1,
	totalScore: 0,
	rounds: [
		{
			roundNumber: 1,
			roundScene: '',
			roundWordId: '',
			words: ['', '', '', '', '', ''],
			roundScore: 0
		},
		{
			roundNumber: 2,
			roundScene: '',
			roundWordId: '',
			words: ['', '', '', '', '', ''],
			roundScore: 0
		},
		{
			roundNumber: 3,
			roundScene: '',
			roundWordId: '',
			words: ['', '', '', '', '', ''],
			roundScore: 0
		},
		{
			roundNumber: 4,
			roundScene: '',
			roundWordId: '',
			words: ['', '', '', '', '', ''],
			roundScore: 0
		},
		{
			roundNumber: 5,
			roundScene: '',
			roundWordId: '',
			words: ['', '', '', '', '', ''],
			roundScore: 0
		},
		{
			roundNumber: 6,
			roundScene: '',
			roundWordId: '',
			words: ['', '', '', '', '', ''],
			roundScore: 0
		}
	]
};

function getCurrentRound(state: GameState) {
	return state.rounds.find((item: RoundData) => item.roundNumber === state.currentRoundNumber);
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		startNewGame: () => {
			return initialState;
		},
		startSavedGame: () => {
			return savedState;
		},
		setRoundScene: (state, action: PayloadAction<RoundScene>) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.roundScene = action.payload;
			}
		},
		finishRound: (state, action: PayloadAction<number>) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.roundScene = 'final-score';
				currentRound.roundScore = action.payload;
				state.totalScore += action.payload;
			}
		},
		increaseRoundNumber: (state) => {
			state.currentRoundNumber++;
		},
		setWordId: (state, action: PayloadAction<string>) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.roundWordId = action.payload;
			}
		},
		addWords: (state, action: PayloadAction<newWord>) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.words[action.payload.index] = action.payload.word;
			}
		}
	}
});

export default gameSlice.reducer;
export const gameActions = gameSlice.actions;

