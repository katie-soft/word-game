import { useNavigate } from 'react-router-dom';
import styles from './HomeButton.module.css';

function Button() {

	const navigate = useNavigate();

	return <button className={styles.button} onClick={()=>{navigate('/');}}>
		<div className={styles.icon}></div>
	</button>;
}

export default Button;