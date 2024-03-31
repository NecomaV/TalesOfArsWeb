import React from 'react'
import NavBar from '../comps/NavBar'

function Blog() {
  return (
    <div>
        <NavBar  />

        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

            <article className="flex flex-col shadow my-4">
                <a href="/as" className="hover:opacity-75">
                    <img alt='img' src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"/>
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="/as" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <a href="/as" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                    <p href="/as" className="text-sm pb-3">
                        By <a href="/as" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p>
                    <a href="/as" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    
                </div>
            </article>

            <article className="flex flex-col shadow my-4">
                <a href="/as" className="hover:opacity-75">
                    <img alt='img' src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"/>
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="/as" className="text-blue-700 text-sm font-bold uppercase pb-4">Automotive, Finance</a>
                    <a href="/as" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                    <p href="/as" className="text-sm pb-3">
                        By <a href="/as" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
                    </p>
                    <a href="/as" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    
                </div>
            </article>

            <article className="flex flex-col shadow my-4">
                <a href="/as" className="hover:opacity-75">
                    <img alt='img' src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"/>
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="/as" className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                    <a href="/as" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                    <p href="/as" className="text-sm pb-3">
                        By <a href="/as" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                    </p>
                    <a href="/as" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    
                </div>
            </article>

        </section>
    </div>
  )
}

export default Blog