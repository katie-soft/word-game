import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import styles from './IconButton.module.css';

type IconButtonProps = {
	variant: 'home' | 'info' | 'back';
	onClick?: () => void;
}

function IconButton({ variant, onClick }: IconButtonProps) {

	const navigate = useNavigate();

	const buttonEffect = (variant === 'home') ? () => {navigate('/');} : onClick;

	return <button className={cn(styles['button'], styles[variant])} onClick={buttonEffect}>
		<div className={styles.icon}></div>
	</button>;
}

export default IconButton;
