import { HTMLAttributes } from 'react';

import styles from './CloseButton.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

function CloseButton({ onClick }: ButtonProps) {
	return <button className={styles.close} onClick={onClick}></button>;
}

export default CloseButton;