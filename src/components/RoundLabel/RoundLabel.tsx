import { useSelector } from 'react-redux';
import { round } from '../../data/rounds';
import { RootState } from '../../store/store';
import { getRoundType } from '../../utils/roundInfo';

import styles from './RoundLabel.module.css';

type RoundLabelProps = {
	score?: number
}

function RoundLabel({ score }: RoundLabelProps) {

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const roundId = getRoundType(currentRoundNumber);
	const roundName = round[roundId].name; 

	const iconType = (currentRoundNumber === 2 || currentRoundNumber === 5) ? 'unequal' : 'equal';

	const withScore = score !== undefined;

	return <div className={styles.round}>
		<div className={styles.info}>
			<div className={styles[iconType]}></div>
			<h3 className={styles.title}>Раунд {currentRoundNumber}/6: {roundName}</h3>
		</div>
		{withScore && <span className={styles.score}>Счет: {score}</span>}
	</div>; 
}

export default RoundLabel;