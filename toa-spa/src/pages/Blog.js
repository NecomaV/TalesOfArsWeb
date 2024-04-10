import React from 'react'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'

import img1 from '../img/loginBg.png'
import img2 from '../img/long.png'
import img3 from '../img/dlc-bg.png'

function Blog() {
  return (
    <div className='w-full'>
        <NavBar  />
        <div className="flex flex-col justify-center items-center w-full">
            <section className="w-full md:w-2/3 flex flex-col px-3">

                <article className="flex flex-col border shadow-xl border-main my-4">
                    <p  className="hover:opacity-75">
                        <img alt='img' src={img1}/>
                    </p>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <p  className="text-fuchsia-800 text-sm font-bold uppercase pb-4">Storyline</p>
                        <p  className="text-3xl font-bold hover:text-gray-700 pb-4">Main idea of a game?</p>
                        <p  className="text-sm pb-3">
                            By <span  className="font-semibold hover:text-gray-800">Jangir</span>, Published on April 25th, 2024
                        </p>
                        <p  className="pb-6">LThe core concept of this game stems from a deep desire to bring attention to Kazakhstan's rich cultural tapestry and its often overlooked beauty. We aim to create an immersive experience that not only entertains but also educates players about the diverse landscapes, traditions, and folklore that define our country.</p>
                        
                    </div>
                </article>

                <article className="flex flex-col shadow-xl border border-main my-4">
                    <p  className="hover:opacity-75">
                        <img alt='img' src={img2}/>
                    </p>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <p  className="text-fuchsia-800 text-sm font-bold uppercase pb-4">Game PLay</p>
                        <p  className="text-3xl font-bold hover:text-gray-700 pb-4">What is gonna be shown?</p>
                        <p  className="text-sm pb-3">
                            By <span  className="font-semibold hover:text-gray-800">Tima</span>, Published on March 12th, 2024
                        </p>
                        <p  className="pb-6">Through engaging gameplay and interactive storytelling, players will embark on a journey that highlights the unique aspects of Kazakhstan's heritage. From the sweeping steppes to the majestic mountains, each location will be meticulously crafted to capture the essence of our land.</p>
                        
                    </div>
                </article>

                <article className="flex flex-col border shadow-xl border-main my-4">
                    <p  className="hover:opacity-75">
                        <img alt='img' className=' ' src={img3}/>
                    </p>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <p  className="text-fuchsia-800 text-sm font-bold uppercase pb-4">Aspects</p>
                        <p  className="text-3xl font-bold hover:text-gray-700 pb-4">Game aspects</p>
                        <p  className="text-sm pb-3">
                            By <span  className="font-semibold hover:text-gray-800">Gaba</span>, Published on March 22nd, 2024
                        </p>
                        <p className="pb-6">Quests and challenges will be intricately woven into the fabric of Kazakh culture, allowing players to explore traditions, interact with NPCs representing different ethnic groups, and uncover the myths and legends that have shaped our history.</p>
                        
                    </div>
                </article>

            </section>
        </div>
        <Footer />
    </div>
  )
}

export default Blog