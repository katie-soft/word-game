import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

import PageTitle from '../../components/PageTitle/PageTitle';
import AccentTitle from '../../components/AccentTitle/AccentTitle';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import Wrapper from '../../components/PageContentWrapper/PageContentWrapper';

function GameResultsPage() {

	const navigate = useNavigate();

	const { totalScore } = useSelector((state: RootState) => state.game);

	return (
		<Layout>
			<Wrapper hasTopOffset>
				<PageTitle>Игра окончена</PageTitle>
				<AccentTitle>Ваш счет: {totalScore}</AccentTitle>
				<Button text='В меню' variant='primary' onClick={() => navigate('/')} />
			</Wrapper>
		</Layout>
	);
}

export default GameResultsPage;