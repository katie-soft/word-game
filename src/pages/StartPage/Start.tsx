import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RoundLabel from '../../components/RoundLabel/RoundLabel';
import Card from '../../components/Card/Card';
import Hint from '../../components/Hint/Hint';
import Navigation from '../../components/Navigation/Navigation';
import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';

import { words } from '../../data/words';
import { getRandomArrayElement } from '../../utils/random';
import { getRoundType } from '../../utils/roundInfo';
import { AppDispatch, RootState } from '../../store/store';
import { gameActions } from '../../store/game.slice';
import { addWord } from '../../store/random.slice';

function Start() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { currentRoundNumber } = useSelector((state: RootState) => state.game);
	const currentRoundType = getRoundType(currentRoundNumber);

	const wordIds: string[] = [];
	const exceptions = useSelector((state: RootState) => state.random);

	const randomWordSelect = () => {
		const wordList = words.filter(word => word.roundId === currentRoundType);
		const filteredWordList = wordList.filter(word => !exceptions.includes(word.id));
		const newWord = getRandomArrayElement(filteredWordList);
		wordIds.push(newWord.id);
	};	

	randomWordSelect();
	randomWordSelect();

	const selectWord = (wordIndex: number) => {
		const selectedWord = wordIds[wordIndex];
		dispatch(gameActions.setRoundScene('show-code'));
		dispatch(gameActions.setWordId(selectedWord));
		dispatch(addWord(selectedWord));
		navigate(`/words/${selectedWord}`);
	};

	const goBack = () => {
		dispatch(gameActions.setRoundScene(''));
		if (currentRoundNumber === 1) {
			navigate('/new-game');
		} else {
			dispatch(gameActions.decreaseRoundNumber());
			navigate('/round-results');
		}
	};

	return (
		<Layout>
			<RoundLabel />
			<Wrapper>
				<Hint>Выберите слово для этого раунда</Hint>
				<Card wordId={wordIds[0]} onClick={() => selectWord(0)}></Card>
				<Card wordId={wordIds[1]} onClick={() => selectWord(1)}></Card>
			</Wrapper>
			<Navigation goBack={goBack} />
		</Layout>
	);
}

export default Start;