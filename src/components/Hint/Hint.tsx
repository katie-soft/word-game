import { ReactNode } from 'react';
import styles from './Hint.module.css';

type HintProps = {
	isError?: boolean;
	children: ReactNode;
}

function Hint({ isError=false, children }: HintProps) {
	return (
		<div className={isError ? styles.error : styles.hint} >{children}</div>
	);
}

export default Hint;