import './index.css';
import BmrPage from './pages/bmr';
import ResultsPage from './pages/results';
import TdeePage from './pages/tdee';
import { Provider } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BmrPage />,
	},
	{
		path: '/tdee',
		element: <TdeePage />,
	},
	{
		path: '/results',
		element: <ResultsPage />,
	},
	{
		path: '*',
		element: <Navigate to="/" replace />,
	},
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
