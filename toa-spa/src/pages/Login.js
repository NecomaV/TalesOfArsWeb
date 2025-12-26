import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import userEmail from '../img/user-email.svg';
import lockImg from '../img/lock.png';
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Login() {
    // Initial state for user data
    const initialState = { email: '', password: '' };
  
    // Create a state variable for user data
    const [userData, setUserData] = useState(initialState);
    
    // Destructure the fields from userData
    const { email, password } = userData;
  
    // Initialize useDispatch hook and Navigate
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Extract auth state using useSelector hook
    const auth = useSelector(state => state.auth);
  
    // UseEffect hook to navigate to home if user is already authenticated
    useEffect(() => {
      if (auth && auth.token)
        navigate('/');
    }, [auth, navigate]);
  
    // Handles on change event for the input fields
    const handleChangeInput = e => {
      const { name, value } = e.target;
      // Update the state with new value
      setUserData({ ...userData, [name]: value });
    };
  
    // Handle form submit
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Dispatch login action
        await dispatch(login(userData));
        
        // If login is successful, navigate to home page
        navigate('/')
      } catch (error) {
        // Log error if there was a problem logging in
        console.log("Error logging in:", error);
      }
    };
  return (
    <div className='bg-loginBg w-full h-screen bg-no-repeat bg-cover'>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-xl bg-transparent">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-transparent">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label className="flex justify-between items-center bg-transparent border-white border text-white sm:text-sm rounded-lg w-full px-2.5">
                    <img src={userEmail} alt="" srcSet="" />
                    <input type="email" name="email" id="email" className="bg-transparent text-white sm:text-sm rounded-lg block w-full p-2.5 focus:ring-red focus:ring-2 placeholder-white" placeholder="EMAIL" required="" onChange={handleChangeInput} value={email} />
                  </label>
                </div>
                <div>
                  <label className="flex justify-between items-center bg-transparent border text-white sm:text-sm rounded-lg w-full px-2.5">
                    <img src={lockImg} alt="" srcSet="" />
                    <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="PASSWORD" 
                      className="bg-transparent text-white sm:text-sm rounded-lg w-full p-2.5 border-transparent placeholder-white" 
                      required="" 
                      onChange={handleChangeInput} 
                      value={password} />
                  </label>
                </div>
                <button type="submit" className="w-full bg-white font-medium rounded-lg text-lg px-5 py-2.5 text-center">LOGIN</button>
                <p className="text-sm font-light text-white">
                  Don’t have an account yet? <Link to="/Register">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
