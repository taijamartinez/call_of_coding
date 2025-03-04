import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ActiveGamePage from './pages/ActiveGamePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import GameDashboardPage from './pages/GameDashboardPage.tsx';
import LeaderboardPage from './pages/LeaderboardPage.js';
import Login from './pages/Login.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GameDashboardPage />
      },
      {
        path: '/active-game',
        element: <ActiveGamePage />
      },
      {
        path: '/leaderboard',
        element: <LeaderboardPage/>
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}