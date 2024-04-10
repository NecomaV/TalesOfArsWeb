import React from 'react'
import { Link } from 'react-router-dom'

function BFT() {
  return (
    <div className='w-full bg-BFT bg-no-repeat bg-fit bg-center bg-bgfourm '>
      <div className=" backdrop-brightness-60">
        <div className="flex flex-col items-center justify-center p-20 w-full  backdrop-blur-[1px]">
            <div className="text-white text-center text-3xl md:text-6xl mt-40 w-4/5 ">
                <h2>Join the social media</h2>
            </div>
            <div className="text-white text-lg md:text-2xl md:w-600 text-center mt-10 p-3 ">
                <p className='leading-8'>Join the Legend of Arslan community to learn new information from the developers themselves, as well as offer your ideas!</p>
            </div>
            <button className="bg-lime-900 hover:bg-blue-700 text-white text-2xl font-bold mt-20 py-3 px-6 rounded md:w-72">
            <Link to='/Login'> Join Now </Link>
                </button>
        </div>
      </div>
        
    </div>
  )
}

export default BFT