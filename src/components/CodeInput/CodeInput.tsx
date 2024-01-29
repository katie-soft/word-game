import { InputHTMLAttributes } from 'react';
import styles from './CodeInput.module.css';

interface ScoreInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function ScoreInput({...props}: ScoreInputProps) {

	return (
		<input 
			className={styles.input} 
			type="text" 
			pattern="^[A-Z0-9]{3,5}$"
			{...props}/>

	);
}

export default ScoreInput;