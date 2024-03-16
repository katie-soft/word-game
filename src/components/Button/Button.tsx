import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'primary' | 'transparent';
	onClick?: () => void;
}

function Button({ variant, text, onClick }: ButtonProps) {
	return <button className={cn(styles['button'], styles[variant])} onClick={onClick}>
		{text}
	</button>;
}

export default Button;