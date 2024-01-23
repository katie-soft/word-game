import { HTMLAttributes } from 'react';
import { words } from '../../data/words';
import WordInput from '../WordInput/WordInput';

import styles from './WordList.module.css';

export interface WordListProps extends HTMLAttributes<HTMLHeadingElement> {
	wordId: number;
	isChecking: boolean;
	updateScore: (isChecked: boolean) => void;
}

function WordList({ wordId, isChecking, updateScore }: WordListProps) {

	let wordsForRound = Array(6).fill('');

	if (wordId) {
		const wordList = words.filter(word => word.id === wordId)[0].wordList;
		if (wordList)  {
			wordsForRound = wordList;
		}
	}

	return <div className={styles.wrapper}>
		{wordsForRound.map(item => (
			<WordInput label={item} isChecking={isChecking} updateScore={updateScore}></WordInput>
		))}
	</div>; 
}

export default WordList;