import { words } from '../../data/words';
import { Word } from '../../types/Word.types';
import styles from './WordLabel.module.css';

import { HTMLAttributes } from 'react';

export interface WordLabelProps extends HTMLAttributes<HTMLHeadingElement> {
	wordId: number;
}

function WordLabel({ wordId }: WordLabelProps) {

	const word: Word = words.filter(word => word.id === wordId)[0]; 

	return <h2 className={styles.label}>{word.word}</h2>;

}

export default WordLabel;