import { useSelector } from 'react-redux';
import cn from 'classnames';

import { round } from '../../data/rounds';
import { RootState } from '../../store/store';
import { getIconType, getRoundType } from '../../utils/roundInfo';

import styles from './RoundLabel.module.css';

type RoundLabelProps = {
	score?: number,
	wordId?: string
}

function RoundLabel({ score, wordId }: RoundLabelProps) {

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const roundId = getRoundType(currentRoundNumber);
	const roundName = round[roundId].name; 
	const iconType = getIconType(roundId);

	const withDetails = score != undefined || !!wordId;
	const detailsText = wordId ? 'Код слова:' : 'Счет:';

	return <div className={cn(styles.round, styles[iconType])}>
		<div className={styles.icon}></div>
		<div className={styles.title}>
			<span>Раунд {currentRoundNumber}/6: </span>
			<span className={styles.subtitle}>{roundName}</span>
		</div>
		{withDetails && <div className={styles.details}>
			<span>{detailsText}</span>
			<span className={styles.subtitle}>{score}{wordId}</span>
		</div>}
	</div>; 
}

export default RoundLabel;