import React from 'react'
import product from '../img/diamond.png'
import dlc from '../img/dlcicon.png'
import blog from '../img/blogicon.png'
import forum from '../img/forumicon.png'


function NavBar() {
  return (
    <div>
        <nav className="flex justify-around items-center l mx-auto p-4 border-gray-200 bg-main">

                <div className=" md:block  w-100">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-main gap-10">
                        <li className='flex items-center gap-2'>
                            <a href="#" className="block py-2 px-3 text-white bg- rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500" aria-current="page">Products</a>
                            <img src={product} alt="" />
                        </li>
                        <li className='flex items-center gap-2'>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">DLC</a>
                            <img src={dlc} alt="" />
                        </li>
                        <li className='flex items-center gap-2'>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                            <img src={blog} alt="" />
                        </li>
                        <li className='flex items-center gap-2'>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Forum</a>
                            <img src={forum} alt="" />
                        </li>

                    </ul>
                </div>
                <a href="https://flowbite.com/" className="flex items-center justify-center w-100 space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tales of Arslan</span>
                </a>
                <div className="w-100 flex justify-center items-center gap-4">
                    <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                        Download Now
                    </button>
                    <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                        Register Now
                    </button>
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