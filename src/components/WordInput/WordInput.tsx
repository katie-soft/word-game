import { useState } from 'react';
import styles from './WordInput.module.css';
import cn from 'classnames';
import WordCheckbox from '../WordCheckbox/WordCheckbox';
import { gameActions } from '../../store/game.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

type PropsType = {
	startValue: string;
	index: string;
	isChecking: boolean;
	updateScore: (isChecked: boolean) => void;
	label?: string;
}

export function WordInput({ startValue, isChecking=false, updateScore, label, index}: PropsType) {

	const [value, setValue] = useState(startValue);
	const [isCrossed, setIsCrossed] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsCrossed(event.target.checked);
		updateScore(event.target.checked);
	};

	const saveInput = (id: string, value: string) => {
		dispatch(gameActions.addWords({
			index: Number(id),
			word: value
		}));
	};

	return (
		<div className={cn(styles['wrapper'], {[styles['crossed']]: isCrossed})}>
			{label && <label className={styles.label}>{label}</label>}
			<div className={styles.row}>
				<input 
					className={styles.input} 
					type="text" 
					readOnly={isChecking}
					onChange={(e) => setValue(e.target.value)}
					onBlur={() => saveInput(index, value)} 
					value={value}
					id={index}/>
				{(isChecking && value.length ) ? <WordCheckbox onChange={handleChange} /> : null}
			</div>
		</div>
	);
}


