import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'primary' | 'transparent';
}

function Button({ variant, text }: ButtonProps) {
	return <button className={cn(styles['button'], styles[variant])}>
		{text}
	</button>;
}

export default Button;