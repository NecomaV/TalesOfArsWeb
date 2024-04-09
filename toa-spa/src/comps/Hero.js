import React from 'react'
import heroimg from '../img/hero.png'

function Hero() {
  return (
    <div className='mt-7 '>
        <div className="h-full w-full flex items-center justify-center">
            <img src={heroimg} alt="" />
        </div>
        <div className="w-full flex flex-col items-center justify-center p-3 mt-16 ">
            <div className="text-white text-6xl">
                <h2>Tales of Arslan</h2>
            </div>
            <div className="text-white text-2xl w-920 text-center mt-10 p-3">
                <p className='leading-8'>The story is told on behalf of Arslan, the main character of our narrative. Wanderings and adventures are conducted on the territory of Kazakhstan, as well as new unprecedented places where on the way we will meet enemies, as well as comrades and ordinary people whom we can help. The world is rich in a variety of things that the main character can explore or take with him.</p>
            </div>
            <div className="w-full flex items-center justify-around mt-14 mb-7">
                <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-72">
                    See What's New
                </button>
                <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-72">
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero