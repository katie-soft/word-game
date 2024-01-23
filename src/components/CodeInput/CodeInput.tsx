import { InputHTMLAttributes } from 'react';
import styles from './CodeInput.module.css';

interface ScoreInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function ScoreInput({...props}: ScoreInputProps) {

	return (
		<input 
			className={styles.input} 
			type="text" 
			{...props}/>

	);
}

export default ScoreInput;