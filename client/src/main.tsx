import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ActiveGamePage from './pages/ActiveGamePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import GameDashboardPage from './pages/GameDashboardPage.tsx';
import LeaderboardPage from './pages/LeaderboardPage.js';
import Login from './pages/Login.tsx';
import GameCompletion from './pages/GameCompletion.tsx';
import auth from './utils/auth';
import NavFooterWrapper from './components/NavFooterWrapper.tsx';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  return auth.loggedIn() ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NavFooterWrapper>
      
      <ErrorPage />
    </NavFooterWrapper>,
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
        element: <NavFooterWrapper> <ProtectedRoute element={<GameDashboardPage />} /> </NavFooterWrapper>
      },
      {
        path: '/game/:gameId', 
        element: <ProtectedRoute element={<ActiveGamePage />} />,
      },
      {
        path: '/game-completion',
        element: <NavFooterWrapper><ProtectedRoute element={<GameCompletion />} /></NavFooterWrapper>,
      },
      {
        path: '/leaderboard',
        element: <NavFooterWrapper> <ProtectedRoute element={<LeaderboardPage />} /> </NavFooterWrapper> 
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}