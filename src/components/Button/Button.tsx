import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
	return <button className={styles.button} {...props}>{children}</button>;
}

export default Button;