import { Word } from '../../types/Word.types';
import { getWordById } from '../../utils/getWordById';
import styles from './WordLabel.module.css';

import { HTMLAttributes } from 'react';

export interface WordLabelProps extends HTMLAttributes<HTMLHeadingElement> {
	wordId: string;
}

function WordLabel({ wordId }: WordLabelProps) {

	const word: Word = getWordById(wordId); 

	return <h2 className={styles.label}>{word.word}</h2>;

}

export default WordLabel;