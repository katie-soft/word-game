import { words } from '../data/words';
import { getRoundType } from './roundInfo';

export const getWordById = (id: string) => words.filter(item => item.id === id)[0];

export const checkWordMatchesRound = (id: string, roundNumber: number) => {
	const word = words.filter(item => item.id === id)[0];
	const currentRoundType = getRoundType(roundNumber);
	return word.roundId === currentRoundType;
};