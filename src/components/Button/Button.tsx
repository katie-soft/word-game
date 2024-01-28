import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function Button({ type='button', children, ...props }: ButtonProps) {
	return <button type={type} className={styles.button} {...props}>{children}</button>;
}

export default Button;