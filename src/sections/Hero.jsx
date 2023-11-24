import React from 'react'
import hero from '../hero.jpg';
const Hero = () => {
    return (
        <div>
            <img
                src={hero}
                alt='heroimg'
                className="w-full  "
            />
            <div className="flex text-2xl justify-center text-[#022B3A] bg-[#E1E5F2] items-center text-bold md:text-4xl p-2  hover:bg-red-500 duration-500 hover:text-white lg:text-5xl">
                The All New Collection! At Cheapest Price
            </div>
        </div>
    )
}

export default Hero