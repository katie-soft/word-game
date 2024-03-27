import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Hint from '../../components/Hint/Hint';
import MenuButton from '../../components/MenuButton/MenuButton';

import { gameActions } from '../../store/game.slice';
import { getWordById } from '../../utils/getWordById';
import { Word } from '../../types/Word.types';
import { RootState } from '../../store/store';
import { getIdFromLocation } from '../../utils/getIdFromLocation';

import PageTitle from '../../components/PageTitle/PageTitle';
import Navigation from '../../components/Navigation/Navigation';
import AccentTitle from '../../components/AccentTitle/AccentTitle';

import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';

function WordPage() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const wordId = getIdFromLocation(useLocation().pathname) || 'error';
	const wordItem: Word = getWordById(wordId);
	const { currentRoundNumber } = useSelector((state: RootState) => state.game);

	const goBack = () => {
		dispatch(gameActions.setRoundScene(''));
		if (currentRoundNumber === 1) {
			navigate('/new-game');
		} else {
			dispatch(gameActions.decreaseRoundNumber());
			navigate('/round-results');
		}
	};

	return <Layout>
		<RoundLabel />
		<Wrapper>
			<PageTitle>{wordItem.word}</PageTitle>
			<AccentTitle>Код слова: {wordId}</AccentTitle>
			<Hint>Скажите этот код другим участникам</Hint>
			<MenuButton variant='proceed' isCentered onClick={() => {
				dispatch(gameActions.setRoundScene('word-input'));
				navigate(`/round/${wordId}`);
			}} />
		</Wrapper>
		<Navigation goBack={goBack} />
	</Layout>;
}

export default WordPage;