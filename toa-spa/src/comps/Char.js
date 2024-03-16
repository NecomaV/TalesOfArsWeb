import React from 'react'
import char from '../img/char.png'

function Char() {
  return (
    <div className='bg-pxBg bg-no-repeat flex justify-center items-center p-10 bg-cover'>
        <div className="bg-main w-1330 h-3/4 bg-opacity-65 flex flex-col items-center justify-center rounded-xl py-16 px-10 mb-14 mt-14">
 
            <div className="flex items-center justify-around gap-2 w-full ">
                <div className="flex flex-col justify-center items-between gap-16 h-full">
                    <p className=' text-white text-5xl w-72'>Character Development</p>
                    <p className='text-white text-2xl w-72'>Forge Your Own Path: Take control of        Arslan's destiny and shape his character according to your choices.</p>
                    <button className="bg-butg  text-white font-bold py-3 px-6 rounded w-72">
                    Start The Journey
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