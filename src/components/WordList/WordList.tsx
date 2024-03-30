import { HTMLAttributes } from 'react';

import { getWordById } from '../../utils/getWordById';
import { WordInput } from '../WordInput/WordInput';

import styles from './WordList.module.css';

export interface WordListProps extends HTMLAttributes<HTMLHeadingElement> {
	startWords: string[];
	wordId: string;
	isChecking: boolean;
	updateScore: (isChecked: boolean) => void;
	handleEnter: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
}

function WordList({ startWords, wordId, isChecking, updateScore, handleEnter }: WordListProps) {

	const wordLabels = getWordById(wordId).wordList || [];

	return <div className={styles.wrapper}>
		{startWords.map((item, i) => (
			<WordInput 
				key={i}
				index={i.toString()}
				startValue={item}
				label={wordLabels[i]} 
				isChecking={isChecking} 
				updateScore={updateScore}
				handleEnter={handleEnter}>
			</WordInput>
		))}
	</div>; 
}

export default WordList;