import React from 'react'
import longb1 from '../img/longb-1.png'
import longb2 from '../img/longb-2.png'


function LongComp() {
  return (
    <div className='w-full h-1330 flex flex-col items-center justify-center bg-LongPic'>
        <div className="w-full flex justify-around items-center">
            <div className="text-white text-left w-600 flex flex-col gap-10">
                <p className='text-5xl'>Follow Arslan's Quest</p>
                <p className='text-2xl'>Dive into an immersive narrative told from the perspective of Arslan, the main character.</p>
                <p className='text-5xl'>Traverse through the diverse landscapes of Kazakhstan</p>
                <p className='text-2xl'>Encountering enemies, allies, and ordinary folk along the way. Unravel the secrets of this richly detailed world as you embark on thrilling adventures.</p>
            </div>
            <div className="">
                <img src={longb1} alt="" />
            </div>
        </div>
        <div className="w-full flex justify-around items-center">
            <div className="">
                <img src={longb2} alt="" />
            </div>
            <div className="text-white text-left w-600 flex flex-col gap-10">
                <h1 className='text-5xl'>Discover the Treasures of Kazakhstan</h1>
                <p className='text-2xl'>Immerse yourself in a world brimming with unique challenges and opportunities. Explore new territories, uncover hidden treasures, and engage in exciting encounters with enemies and allies.
                The possibilities are endless as you navigate through Arslan's epic journey.</p>
                
            </div>
            
        </div>
    </div>
  )
}

export default LongComp