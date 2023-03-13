import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import ResultsPage from './pages/results';
import BmrPage from './pages/bmr';
import TdeePage from './pages/tdee';
import { Provider } from 'jotai';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/bmr',
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
		element: <Navigate to="/bmr" replace />,
	},
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
