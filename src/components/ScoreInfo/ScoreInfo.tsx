import { RoundData } from '../../store/game.slice';
import styles from './ScoreInfo.module.css';

interface ScoreInfoProps {
  roundData: RoundData[]
}

function ScoreInfo({roundData}: ScoreInfoProps) {
	return <ul className={styles.list}>
		{
			roundData.map(round => <li key={round.roundNumber} className={styles['list-item']}>
        Раунд {round.roundNumber}: {round.roundScore}</li>)
		}
	</ul>;
}

export default ScoreInfo;