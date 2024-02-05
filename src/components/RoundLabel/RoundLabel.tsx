import { useSelector } from 'react-redux';
import { round } from '../../data/rounds';
import { RootState } from '../../store/store';
import { getRoundType } from '../../utils/roundInfo';

import styles from './RoundLabel.module.css';

function RoundLabel() {

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const roundId = getRoundType(currentRoundNumber);
	const roundName = round[roundId].name; 

	const iconType = (currentRoundNumber === 2 || currentRoundNumber === 5) ? 'unequal' : 'equal';

	return <div className={styles.round}>
		<h2 className={styles.title}>Раунд {currentRoundNumber}/6: {roundName}</h2>
		<div className={styles[iconType]}></div>
	</div>; 
}

export default RoundLabel;