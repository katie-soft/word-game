export const addBonusPoint = (score: number) => {
	return score === 6 ? score + 1 : score;
};

export const initialScore = (currentRoundNumber: number) => {
	return currentRoundNumber === 2 || currentRoundNumber === 5 ? 6 : 0;
};