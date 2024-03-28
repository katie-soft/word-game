function getRandomNum(min: number, max: number): number {
	return Math.floor(min + Math.random() * (max - min + 1) );
}

export function getRandomArrayElement<T>(array: T[]): T {
	const index = getRandomNum(0, array.length - 1);
	return array[index];
}