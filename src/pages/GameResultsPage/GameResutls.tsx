import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

import PageTitle from '../../components/PageTitle/PageTitle';
import AccentTitle from '../../components/AccentTitle/AccentTitle';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';
import ScoreInfo from '../../components/ScoreInfo/ScoreInfo';

function GameResultsPage() {

	const navigate = useNavigate();

	const { totalScore, rounds } = useSelector((state: RootState) => state.game);

	return (
		<Layout>
			<Wrapper hasTopOffset>
				<PageTitle>Игра окончена</PageTitle>
				<AccentTitle>Ваш счет: {totalScore}</AccentTitle>
				<ScoreInfo roundData={rounds}/>
				<Button text='В меню' variant='primary' onClick={() => navigate('/')} />
			</Wrapper>
		</Layout>
	);
}

export default GameResultsPage;