import { ReactNode } from 'react';
import styles from './Hint.module.css';

type HintProps = {
	children: ReactNode;
}

function Hint({ children }: HintProps) {
	return (
		<div className={styles.hint}>{children}</div>
	);
}

export default Hint;