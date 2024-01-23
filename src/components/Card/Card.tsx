import { words } from '../../data/words';
import { Word } from '../../types/Word.types';
import styles from './Card.module.css';

interface CardProps {
	wordId: number;
	onClick?: () => void;
}

function Card({ wordId, onClick }: CardProps) {

	const wordItem: Word = words.filter(word => word.id === wordId)[0];

	return (
		<div className={styles.card} onClick={onClick}>
			{wordItem.word && <span className={styles.word}>{wordItem.word}</span>}
			{wordItem.wordList && <ul className={styles.list}>
				{wordItem.wordList.map(item => <li className={styles['list-item']}>{item}</li>)}
			</ul>}
		</div>
	);
}

export default Card;