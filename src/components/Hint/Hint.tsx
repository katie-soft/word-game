import { ReactNode } from 'react';
import CloseButton from '../CloseButton/CloseButton';

import styles from './Hint.module.css';

type HintProps = {
	isError?: boolean;
	isVisible: boolean;
	close: () => void;
	children: ReactNode;
}

function Hint({ isError=false, isVisible=true, close, children }: HintProps) {

	if (isVisible) {
		return (
			<div className={isError ? styles.error : styles.hint}>
				{children}
				<CloseButton onClick={() => close()}/>
			</div>
		);
	}
}

export default Hint;