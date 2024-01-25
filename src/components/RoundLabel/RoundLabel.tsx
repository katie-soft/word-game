import { useSelector } from 'react-redux';
import { round } from '../../data/rounds';
import styles from './RoundLabel.module.css';
import { RootState } from '../../store/store';
import { getRoundType } from '../../utils/roundInfo';

function RoundLabel() {

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const roundId = getRoundType(currentRoundNumber);
	const roundName = round[roundId].name; 

	return <h2 className={styles.round}>Раунд {currentRoundNumber}/6: {roundName}</h2>;
}

export default RoundLabel;