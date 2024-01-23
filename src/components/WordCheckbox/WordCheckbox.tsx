import { HTMLAttributes } from 'react';
import styles from './WordCheckbox.module.css';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
}

function WordCheckbox({ ...props }: CheckboxProps) {
	return <div className={styles.wrapper}>
		<span className={styles.checkmark}></span>
		<input type="checkbox" className={styles.checkbox} {...props} />

	</div>;
}

export default WordCheckbox;