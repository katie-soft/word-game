export const increaseScore = (score: number) => score + 1;

export const decreaseScore = (score: number) => score - 1;

export const addBonusPoint = (score: number) => score === 6 ? score + 1 : score;

export const initialScore = (currentRoundNumber: number, wordsFilled: number) => currentRoundNumber === 2 || currentRoundNumber === 5 ? wordsFilled : 0;