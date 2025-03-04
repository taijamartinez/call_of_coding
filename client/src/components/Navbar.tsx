import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);
  const location = useLocation();

  const checkLogin = () => {
    if (auth.loggedIn()) { // Assuming `auth.loggedIn()` checks if a user is logged in
      setLoginCheck(true);
    } else {
      setLoginCheck(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [loginCheck])

  // if the user is on the login page, don't show the navbar

  if (location.pathname === '/login') {
    return null;
  }

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
      {
        !loginCheck ? (
          <li className='nav-item'>
            <button type='button'>
              <Link to='/login'>Login</Link>
            </button>
          </li>
        ) : (
          <li className='nav-item'>
            <button type='button' onClick={() => {
              auth.logout();
            }}>Logout</button>
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default Navbar;
