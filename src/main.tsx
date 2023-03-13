import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import GoalPage from './pages/goal';
import ResultsPage from './pages/results';
import BmrPage from './pages/bmr';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BmrPage />,
	},
	{
		path: '/goals',
		element: <GoalPage />,
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
		<RouterProvider router={router} />
	</React.StrictMode>
);
