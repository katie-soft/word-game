import { HTMLAttributes } from 'react';

import { getWordById } from '../../utils/getWordById';
import { WordInput } from '../WordInput/WordInput';

import styles from './WordList.module.css';

export interface WordListProps extends HTMLAttributes<HTMLHeadingElement> {
	wordId: string;
	isChecking: boolean;
	updateScore: (isChecked: boolean) => void;
}

function WordList({ wordId, isChecking, updateScore }: WordListProps) {

	let wordsForRound = Array(6).fill('');

	if (wordId) {
		const wordList = getWordById(wordId).wordList;
		if (wordList)  {
			wordsForRound = wordList;
		}
	}

	return <div className={styles.wrapper}>
		{wordsForRound.map((item, i) => (
			<WordInput 
				key={i}
				index={i.toString()}
				label={item} 
				isChecking={isChecking} 
				updateScore={updateScore}></WordInput>
		))}
	</div>; 
}

export default WordList;