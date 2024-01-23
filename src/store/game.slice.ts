import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from '../utils/localStorage';

export type RoundData = {
  roundNumber: number;
  roundStatus: 'not_started' | 'started' | 'completed',
	roundWordId: number,
	words: string[],
	roundScore: number
}

export type GameState = {
  currentRoundNumber: number;
  totalScore: number;
  rounds: RoundData[]
}

const initialState: GameState = loadState<GameState>('gameData') ?? {
	currentRoundNumber: 1,
	totalScore: 0,
	rounds: [
		{
			roundNumber: 1,
			roundStatus: 'not_started',
			roundWordId: 0,
			words: [],
			roundScore: 0
		},
		{
			roundNumber: 2,
			roundStatus: 'not_started',
			roundWordId: 0,
			words: [],
			roundScore: 0
		},
		{
			roundNumber: 3,
			roundStatus: 'not_started',
			roundWordId: 0,
			words: [],
			roundScore: 0
		},
		{
			roundNumber: 4,
			roundStatus: 'not_started',
			roundWordId: 0,
			words: [],
			roundScore: 0
		},
		{
			roundNumber: 5,
			roundStatus: 'not_started',
			roundWordId: 0,
			words: [],
			roundScore: 0
		},
		{
			roundNumber: 6,
			roundStatus: 'not_started',
			roundWordId: 0,
			words: [],
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
		startGame: (state) => {
			state.currentRoundNumber = 1;
			state.totalScore = 0;
			state.rounds = initialState.rounds;
		},
		startRound: (state) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.roundStatus = 'started';
			}
		},
		finishRound: (state, action: PayloadAction<number>) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.roundStatus = 'completed';
				currentRound.roundScore = action.payload;
				state.totalScore += action.payload;
			}
		},
		increaseRoundNumber: (state) => {
			state.currentRoundNumber++;
		},
		setWordId: (state, action: PayloadAction<number>) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.roundWordId = action.payload;
			}
		},
		addWords: (state, action: PayloadAction<string[]>) => {
			const currentRound = getCurrentRound(state);
			if (currentRound) {
				currentRound.words = action.payload;
			}
		}
	}
});

export default gameSlice.reducer;
export const gameActions = gameSlice.actions;