import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";
import './css/Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


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

// allowed me to host the video in google docs to save space in repo
const vimeoVideoUrl = "https://player.vimeo.com/video/1062656659?autoplay=1&loop=1&muted=1&background=1";



  return (
    <div className='login-container'>

      {/* displays BG video for login page */}
      
      <div className="video-wrapper">
      <iframe
        src={vimeoVideoUrl}
        onLoad={() => setTimeout(()=>setLoading(false), 1250) }
        // onCanPlay={()=>setLoading(false)}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        className="login-BG-video"
        title="Login Background Video"
      ></iframe>
    </div>

    { loading? (<h1>LOADING...</h1> ) :(<>
    

      {/* Title and text section */}

      <div className="title-container">
        <h1 className="login-game-title">Call-of-Coding</h1>
        <p className="warning-text"></p>

      </div>


      {/* Form section */}
      <div className="form-container">
      <form className='form' onSubmit={handleSubmit}>

        <h1 className="Login-txt">Login</h1>

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
      </>)}
    </div>
    
  );
};

export default Login;
