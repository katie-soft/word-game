import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './MenuButton.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'start' | 'code' | 'proceed' | 'rules' | 'select';
}

const menuButtonText = {
	start: 'Новая игра',
	code: 'Ввести код',
	proceed: 'Продолжить',
	rules: 'Правила',
	select: 'Выбрать слово'
};

function Button({ variant, ...props }: ButtonProps) {
	return <button className={cn(styles['button'], styles[variant])} {...props}>
		<div className={styles.icon}></div>
		{menuButtonText[variant]}
	</button>;
}

export default Button;