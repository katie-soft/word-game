import { useState } from 'react';
import styles from './WordInput.module.css';
import cn from 'classnames';
import WordCheckbox from '../WordCheckbox/WordCheckbox';

type PropsType = {
	isChecking: boolean;
	updateScore: (isChecked: boolean) => void;
	label?: string;
}

function WordInput({ isChecking=false, updateScore, label }: PropsType) {

	const [isCrossed, setIsCrossed] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsCrossed(event.target.checked);
		updateScore(event.target.checked);
	};

	return (
		<div className={cn(styles['wrapper'], {[styles['crossed']]: isCrossed})}>
			{label && <label className={styles.label}>{label}</label>}
			<div className={styles.row}>
				<input className={styles.input} type="text" readOnly={isChecking} />
				{isChecking && 
				<WordCheckbox onChange={handleChange} />}
			</div>
		</div>
	);
}

export default WordInput;
