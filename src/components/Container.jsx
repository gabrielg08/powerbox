import React from 'react'
import { WiAlien } from "react-icons/wi";

const Container = () => {
  return (
    <section id='home' className=''>
    <div className='bg-[url("/img/panel-solar.jpg")] h-[500px] w-[100%] bg-cover bg-center absolute'>
    </div>
    <div className='relative h-[500px] w-[100%] grid grid-cols-1 justify-center content-center bg-gray-400/60'>
        <div className='h-[150px] w-[100%] grid justify-center content-center'>
        <h1 className='text-[100px] font-bold text-red-700'>
            Power
            <span className='text-black'> Box</span>
        </h1>
        </div>
    </div>
    </section>
    
  )
}

export default Container
