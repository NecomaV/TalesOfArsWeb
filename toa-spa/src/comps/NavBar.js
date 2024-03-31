import React   from 'react'
import product from '../img/diamond.png'
import dlc from '../img/dlcicon.png'
import blog from '../img/blogicon.png'
import forum from '../img/forumicon.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions/authAction'
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';

function NavBar() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const navbarClasses = classnames({
        'bg-change': pathname === '/DLC',
        'bg-main': pathname === '/',
        'bg-main': pathname === '/Blog'
    });

    const textClasses = classnames({
        'text-main': pathname === '/DLC',
        'text-white': pathname === '/',
        'text-slate-50': pathname === '/Blog'
    });
      
    const handleLogout = () => {
      dispatch(logout());
    }
  return (
    <div>
        <nav className={`flex bg- justify-around items-center  mx-auto p-4 border-gray-200 ${navbarClasses}`}>

                <div className=" md:block  w-100">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent gap-10">
                        <li className='flex items-center gap-2'>
                        <Link to="/" className='flex items-center gap-2' >
                            <p  className={`block py-2 px-3 ${textClasses} bg- rounded bg-transparent md:p-0`}aria-current="page">Products</p>
                            <img src={product} alt="" />
                        </Link>

                        </li>
                        <li className='flex items-center gap-2'>
                            <button className='flex items-center gap-2'>
                            <Link to="/DLC" className='flex items-center gap-2'>
                                <p className={`block py-2 px-3 ${textClasses} bg- rounded bg-transparent md:p-0`}>DLC</p>
                                <img src={dlc} alt="" />
                            </Link>
                            </button>
                        </li>
                        <li className='flex items-center gap-2'>
                        <Link to="/Blog" className='flex items-center gap-2'>
                            <p href="#" className={`block py-2 px-3 ${textClasses} bg- rounded bg-transparent md:p-0`}>Blog</p>
                            <img src={blog} alt="" />
                            </Link>

                        </li>
                        <li className='flex items-center gap-2'>
                            <p href="#" className={`block py-2 px-3 ${textClasses} bg- rounded bg-transparent md:p-0`}>Forum</p>
                            <img src={forum} alt="" />
                        </li>

                    </ul>
                </div>
                <p href="" className="flex items-center justify-center w-100 space-x-3 rtl:space-x-reverse">
                    <span className={`self-center text-2xl font-semibold whitespace-nowrap ${textClasses}`}>Tales of Arslan</span>
                </p>
                <div className="w-100 flex justify-center items-center gap-4">
                    <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded min-w-max">
                        Download Now
                    </button>
                    {auth.token ? (
                    <>
                        <span className={`${textClasses} font-bold py-3 px-6 rounded min-w-max`}>
                        Welcome, {auth.user && auth.user.fullname}
                        </span>
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
                        Logout
                        </button>
                    </>
                    ) : (
                    <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded min-w-max">
                        <Link to="/Login" >Join Now</Link>
                    </button>
                    )}
                </div>
                                                    

                {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button> */}
                
        </nav>

    </div>
  )
}

export default NavBar