import { roundType } from '../data/words';

export function getRoundType(roundNumber: number): number {
	return roundType.filter(round => round.roundNumber === roundNumber)[0].roundId;
}