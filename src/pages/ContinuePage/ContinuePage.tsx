/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import Start from '../StartPage/Start';
import { RootState } from '../../store/store';
import InputPage from '../InputPage/InputPage';
import RoundResultsPage from '../RoundResultsPage/RoundResults';
import { useSavedGame } from '../../utils/useSavedGame';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ContinuePage = () => {

	const navigate = useNavigate();

	useSavedGame();
	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const roundInfo = useSelector((state: RootState) => state.game.rounds.filter(item => item.roundNumber === currentRoundNumber)[0]);

	switch (roundInfo.roundScene) {
	case 'word-select':
		return (<Start />);
	case 'show-code':
		useEffect(() => navigate(`/words/${roundInfo.roundWordId}`), []);
		break;
	case 'code-input':
		return (<InputPage />);
	case 'word-input':
		useEffect(() => navigate(`/round/${roundInfo.roundWordId}`), []);
		break;
	case 'score-count':
		useEffect(() => navigate(`/round/${roundInfo.roundWordId}`), []);
		break;
	case 'final-score':
		return (<RoundResultsPage />);
	default:
		return (<Start />);
	}
};