export const increaseScore = (score:number) => {
	return score + 1;
};

export const decreaseScore = (score:number) => {
	return score - 1;
};

export const addBonusPoint = (score: number) => {
	return score === 6 ? score + 1 : score;
};

export const initialScore = (currentRoundNumber: number, wordsFilled: number) => {
	return currentRoundNumber === 2 || currentRoundNumber === 5 ? wordsFilled : 0;
};