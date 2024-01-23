import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Word.module.css';
import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Hint from '../../components/Hint/Hint';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function WordPage() {

	const navigate = useNavigate();
	
	const wordId = Number(useLocation().pathname.split('/').at(-1));

	return <div className={styles.wrapper}>
		<RoundLabel />
		<Card wordId={wordId}/>
		<div className={styles.code}>Код слова: {wordId}</div>
		<Hint>Скажите этот код другим участникам</Hint>
		<Button onClick={() => {navigate(`/round/${wordId}`);}}>Далее</Button>
	</div>;
}

export default WordPage;