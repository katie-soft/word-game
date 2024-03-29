import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from './pages/Menu/Menu';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Start from './pages/StartPage/Start';
import WordPage from './pages/WordPage/Word';
import RoundPage from './pages/RoundPage/RoundPage';
import RoundResults from './pages/RoundResultsPage/RoundResults';
import GameResults from './pages/GameResultsPage/GameResutls';
import InputPage from './pages/InputPage/InputPage';
import NewGame from './pages/NewGamePage/NewGame';

import { store } from './store/store';
import { ContinuePage } from './pages/ContinuePage/ContinuePage';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu />
	},
	{
		path: '/new-game',
		element: <NewGame />
	},
	{
		path: '/continue',
		element: <ContinuePage />
	},
	{
		path: '/start',
		element: <Start />
	},
	{
		path: '/words/:id',
		element: <WordPage />
	},
	{
		path: '/code',
		element: <InputPage />
	},
	{
		path: '/round/:id',
		element: <RoundPage />
	},
	{
		path: '/round-results',
		element: <RoundResults />
	},
	{
		path: '/game-results',
		element: <GameResults />
	},
	{
		path: '*',
		element: <ErrorPage />
	}
], { basename: '/word-game' });

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

