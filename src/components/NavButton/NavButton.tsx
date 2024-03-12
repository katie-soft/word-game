import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import styles from './NavButton.module.css';

type NavButtonProps = {
	variant: 'home' | 'results' | 'hint' | 'back';
	onClick?: () => void;
}

const buttonText = {
	home: 'Домой',
	results: 'Результаты',
	hint: 'Подсказка',
	back: 'Назад'
};

function NavButton({ variant, onClick }: NavButtonProps) {

	const navigate = useNavigate();

	const buttonEffect = (variant === 'home') ? () => {navigate('/');} : onClick;

	return <button className={cn(styles['button'], styles[variant])} onClick={buttonEffect}>
		<div className={styles.icon}></div>
		{buttonText[variant]}
	</button>;
}

export default NavButton;
