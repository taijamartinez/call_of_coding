import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";

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
  };
};


  return (
    <div className='container'>
      
      <form className='form' onSubmit={handleSubmit}>

        <h1>Login</h1>

        {/* displays login error messages */}
        {error && <p className="error-message">{error}</p>}

        {/* username input */}
        <label >Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
        />
        {/* password input */}
      <label>Password</label>
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
    
  )
};

export default Login;
