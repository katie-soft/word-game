import { roundType } from '../data/rounds';
import { IconType } from '../types/Word.types';

export function getRoundType(roundNumber: number): number {
	return roundType.filter(round => round.roundNumber === roundNumber)[0].roundId;
}

export function isRoundGoalMatch(roundNumber: number): boolean {
	return (roundNumber !== 2) && (roundNumber !== 5);
}

export function checkIsBlitz (roundNumber: number) {
	return (roundNumber === 3 || roundNumber === 6);
}

export function getIconType(roundId: number): IconType {
	switch(roundId) {
	case (0): 
		return 'equal';
	case (1): 
		return 'unequal';
	case (2): 
		return 'blitz';
	default:
		return 'equal';
	}
}