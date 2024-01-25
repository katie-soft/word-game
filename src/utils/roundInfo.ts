import { roundType } from '../data/rounds';

export function getRoundType(roundNumber: number): number {
	return roundType.filter(round => round.roundNumber === roundNumber)[0].roundId;
}