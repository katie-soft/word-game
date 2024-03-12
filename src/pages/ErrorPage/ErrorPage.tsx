import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './ErrorPage.module.css';

function ErrorPage() {

	const navigate = useNavigate();

	return (
		<>
			<h3 className={styles.title}>Такой страницы не существует</h3>
			<p className={styles.title}>Остается только вернуться на главный экран</p>
			<Button text='Домой' variant='primary' onClick={() => navigate('/')} />
		</>
	);
}

export default ErrorPage;