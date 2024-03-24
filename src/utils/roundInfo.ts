import { roundType } from '../data/rounds';

export function getRoundType(roundNumber: number): number {
	return roundType.filter(round => round.roundNumber === roundNumber)[0].roundId;
}

export function isRoundGoalMatch(roundNumber: number): boolean {
	return (roundNumber !== 2) && (roundNumber !== 5);
}

export function checkIsBlitz (roundNumber: number) {
	return (roundNumber === 3 || roundNumber === 6);
}