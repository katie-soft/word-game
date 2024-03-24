import { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './MenuButton.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'start' | 'code' | 'proceed' | 'rules' | 'select';
	isCentered?: boolean;
}

const menuButtonText = {
	start: 'Новая игра',
	code: 'Ввести код',
	proceed: 'Продолжить',
	rules: 'Правила',
	select: 'Выбрать слово'
};

function Button({ variant, isCentered, ...props }: ButtonProps) {
	return <button className={cn(styles['button'], styles[variant], {[styles.centered]: isCentered})} {...props}>
		<div className={styles.icon}></div>
		{menuButtonText[variant]}
	</button>;
}

export default Button;