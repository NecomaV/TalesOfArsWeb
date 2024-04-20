import React from 'react'
import longb1 from '../img/longb-1.png'
import longb2 from '../img/longb-2.png'


function LongComp() {
  return (
    <div className='w-full 1089:h-1330 flex flex-col items-center justify-center bg-LongPic bg-cover bg-no-repeat bg-fixed'>
        <div className="w-full flex flex-col 1089:flex-row justify-around items-center p-10 gap-10 1383:gap-0">
            <div className="text-white 990:mt-0 text-left md:w-600 flex flex-col gap-7 1089:gap-10 ">
                <p className='text-3xl 990:text-4xl lg:text-5xl'>Follow Aryslan's Quest</p>
                <p className='text-lg 990:text-xl lg:text-2xl'>Dive into an immersive narrative told from the perspective of Aryslan, the main character.</p>
                <p className='text-3xl 990:4xl lg:text-5xl'>Traverse through the diverse landscapes of Kazakhstan</p>
                <p className='text-lg 990:text-xl lg:text-2xl'>Encountering enemies, allies, and ordinary folk along the way. Unravel the secrets of this richly detailed world as you embark on thrilling adventures.</p>
            </div>
            <div className="">
                <img src={longb1} alt="" />
            </div>
        </div>
        <div className="w-full flex flex-col-reverse 1089:flex-row justify-around items-center p-10 gap-10 1383:gap-0">
            <div className="">
                <img src={longb2} alt="" />
            </div>
            <div className="text-white 990:mt-0 text-left md:w-600 flex flex-col gap-7 1089:gap-10">
                <h1 className='text-3xl 990:text-4xl lg:text-5xl'>Discover the Treasures of Kazakhstan</h1>
                <p className='text-lg 990:text-xl lg:text-2xl'>Immerse yourself in a world brimming with unique challenges and opportunities. Explore new territories, uncover hidden treasures, and engage in exciting encounters with enemies and allies.
                The possibilities are endless as you navigate through Aryslan's epic journey.</p>
                
            </div>
            
        </div>
    </div>
  )
}

export default LongComp