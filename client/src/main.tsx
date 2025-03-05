import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ActiveGamePage from './pages/ActiveGamePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import GameDashboardPage from './pages/GameDashboardPage.tsx';
import LeaderboardPage from './pages/LeaderboardPage.js';
import Login from './pages/Login.tsx';
import auth from './utils/auth';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  return auth.loggedIn() ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <ProtectedRoute element={<GameDashboardPage />} />
      },
      {
        path: '/active-game',
        element: <ProtectedRoute element={<ActiveGamePage />}/>,
      },
      {
        path: '/leaderboard',
        element: <ProtectedRoute element={<LeaderboardPage />} />
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}