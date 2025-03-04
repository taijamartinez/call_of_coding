import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";
import backgroundVideo from '../assets/login-BG-Video.mp4';
import './css/Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // resets error state
    setError(null);

    try {
      // Call login API
      const data = await login(loginData);
      if (data?.token) {
      // Stores token and redirects user
      Auth.login(data.token);
    } else {
      setError("Invalid username or password.");
    }
  } catch (error) {
    setError("Login failed. Please try again.");
    console.error("Failed to login", error);
  }
};


  return (
    <div className='login-container'>

      {/* displays BG video for login page */}
      <video className= "login-BG-video" autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
      </video>

      {/* Title and text section */}

      <div className="title-container">
        <h1 className="game-title">Call-of-Coding</h1>
        <p className="warning-text">WARNING: This page contains top-secrete material. Do not continue unless permitted</p>

      </div>


      {/* Form section */}
      <div className="form-container">
      <form className='form' onSubmit={handleSubmit}>

        <h1 className="Login-txt"></h1>

        {/* displays login error messages */}
        {error && <p className="error-message">{error}</p>}

        {/* username input */}
        <label className="username-input-text">Username:</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
        />
        {/* password input */}
      <label className="password-input-text">Password:</label>
        <input 
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
        />
        {/* submit button */}
        <button type='submit'>Login</button>

      </form>
      </div>
    </div>
    
  );
};

export default Login;
