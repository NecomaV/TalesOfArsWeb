import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../img/user.png';
import userEmail from '../img/user-email.svg';
import lockImg from '../img/lock.png';
import { register } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';



function Register() {

  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPass: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

      e.preventDefault();
      const { username, email, password, confirmPass } = formData;
      if(password !== confirmPass){
        alert("Passwords don't match!");
        return;
      }
    
      const newUser = {
        fullname: username,
        username,
        email,
        password,
        gender: 'Male', 
      };
    
      dispatch(register(newUser))
      .then(res => {
        setMessage('Registration successful!'); 
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPass: '',
        }); 
    
        setTimeout(() => {
          setMessage('');
        }, 5000);
    
       
      })
      .catch(err => {
        setMessage(''); 
        setErrorMessage(err); 
        
        
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
    });
    
  };

    return (
    <div className='bg-loginBg w-full h-screen bg-no-repeat bg-cover'>
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-xl bg-transparent">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-transparent">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Register your account
                        </h1>
                        <form className="space-y-4 md:space-y-6"  onSubmit={handleSubmit}>
                            <div>
                                <label className="flex justify-between items-center bg-transparent border-white border text-white sm:text-sm rounded-lg w-full px-2.5">
                                    <img src={userImg} alt="Username field" />
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Username"
                                        className="bg-transparent text-white sm:text-sm rounded-lg w-full p-2.5 focus:ring-red focus:ring-2 placeholder-white"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="flex justify-between items-center bg-transparent border text-white sm:text-sm rounded-lg w-full px-2.5">
                                    <img src={userEmail} alt="Email field" />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="bg-transparent text-white sm:text-sm rounded-lg w-full p-2.5 border-transparent placeholder-white"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="flex justify-between items-center bg-transparent border text-white sm:text-sm rounded-lg w-full px-2.5">
                                    <img src={lockImg} alt="Password field" />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        className="bg-transparent text-white sm:text-sm rounded-lg w-full p-2.5 border-transparent placeholder-white"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="flex justify-between items-center bg-transparent border text-white sm:text-sm rounded-lg w-full px-2.5">
                                    <img src={lockImg} alt="Confirm password field" />
                                    <input
                                        type="password"
                                        name="confirmPass"
                                        id="confirmPass"
                                        placeholder="Confirm Password"
                                        className="bg-transparent text-white sm:text-sm rounded-lg w-full p-2.5 border-transparent placeholder-white"
                                        value={formData.confirmPass}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            
                            <button type="submit" className="w-full bg-white font-medium rounded-lg text-lg px-5 py-2.5 text-center">
                                REGISTER
                            </button>
                            <p className='text-white'>{message}</p>
                            <p className='text-white'>{errorMessage}</p>

                            <p className="text-sm font-light text-white">
                                Already have an account? <Link to="/Login">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Register;