import React from 'react'
import char from '../img/char.png'
import { Link } from 'react-router-dom'

function Char() {
  return (
    <div className='bg-pxBg bg-no-repeat flex justify-center items-center p-10 bg-cover'>
        <div className="bg-main w-full 1089:w-1330 h-3/4 bg-opacity-65 flex flex-col items-center justify-center rounded-xl py-16 364:px-10 mb-14 mt-14">
 
            <div className="flex flex-col 990:flex-row gap-10 items-center justify-around w-full ">
                <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 h-full">
                    <p className=' text-white text-center text-3xl sm:text-5xl sm:w-72'>Character Development</p>
                    <p className='text-white text-lg sm:text-2xl sm:w-72 428:w-full w-44'>Forge Your Own Path: Take control of        Aryslan's destiny and shape his character according to your choices.</p>
                    <button className="bg-butg  text-white font-bold py-3 px-6 rounded 428:w-72">
                   <Link to='/Login'>Start The Journey </Link> 
                    </button>
                </div>
               
                <div className="flex flex-col items-center justify-center ">
                    
                    <div className="">
                        <img src={char} alt="" />
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Char