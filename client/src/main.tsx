import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
<<<<<<< HEAD
import Board from './pages/LeaderboardPage.jsx';
import ErrorPage from './pages/ErrorPage.tsx';
import EditTicket from './pages/GameDashboardPage.jsx';
import CreateTicket from './pages/ActiveGamePage.jsx.tsx';
=======
import Board from './pages/ActiveGame.jsx';
import ErrorPage from './pages/ErrorPage.tsx';
import EditTicket from './pages/GameDashboardPage.jsx';
import CreateTicket from './pages/LeaderboardPage.jsx';
>>>>>>> a83b99383772c55db2579765aa1969b5a063dbd9
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Board />
      }, 
      {
        path: '/edit',
        element: <EditTicket />
      },
      {
        path: '/create',
        element: <CreateTicket />
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
