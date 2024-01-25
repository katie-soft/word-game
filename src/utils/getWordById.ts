import { words } from '../data/words';

export const getWordById = (id: string) => {
	return words.filter(item => item.id === id)[0];
};