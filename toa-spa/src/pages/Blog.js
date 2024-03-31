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
                        <p  className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                        <p  className="text-sm pb-3">
                            By <span  className="font-semibold hover:text-gray-800">Jangir</span>, Published on April 25th, 2024
                        </p>
                        <p  className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                        
                    </div>
                </article>

                <article className="flex flex-col shadow-xl border border-main my-4">
                    <p  className="hover:opacity-75">
                        <img alt='img' src={img2}/>
                    </p>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <p  className="text-fuchsia-800 text-sm font-bold uppercase pb-4">Automotive, Finance</p>
                        <p  className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                        <p  className="text-sm pb-3">
                            By <span  className="font-semibold hover:text-gray-800">Tima</span>, Published on March 12th, 2024
                        </p>
                        <p  className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                        
                    </div>
                </article>

                <article className="flex flex-col border shadow-xl border-main my-4">
                    <p  className="hover:opacity-75">
                        <img alt='img' className=' ' src={img3}/>
                    </p>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <p  className="text-fuchsia-800 text-sm font-bold uppercase pb-4">Sports</p>
                        <p  className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                        <p  className="text-sm pb-3">
                            By <span  className="font-semibold hover:text-gray-800">Gaba</span>, Published on March 22nd, 2024
                        </p>
                        <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                        
                    </div>
                </article>

            </section>
        </div>
        <Footer />
    </div>
  )
}

export default Blog