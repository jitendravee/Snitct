import React from 'react'
import h1 from '../h1.jpg'
import h2 from '../h2.jpg'
import h3 from '../h3.jpg'
import h4 from '../h4.jpg'
const Cards = () => {
    return (
        <div>
            <div className="flex flex-cols w-full gap gap-2  bg-[#E1E5F2] py-3">
                <div className="border bottom-2">
                    <img
                        src={h1}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold">Jogging Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] font-semibold">Rs 3,000</span>
                </div>
                <div className="border bottom-2">
                    <img
                        src={h2}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold">Cool Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] font-semibold">Rs 2,000</span>
                </div>
                <div className="border bottom-2 ">
                    <img
                        src={h3}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold">Jordan Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] font-semibold ">Rs 7,000</span>
                </div>
                <div className="">
                    <img
                        src={h4}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold ">Special Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] border bottom-6 font-semibold">Rs 10,000</span>
                </div>



            </div>
            <div className="flex justify-center items-center text-3xl md:text-4xl lg:text-5xl
            font-[poppins] font-semibold text-[#f72585] bg-[#f8f7ff]
            p-2 py-4 hover:bg-yellow-100 duration-500
            ">
Latest fashion and Trending designs.
            </div>
            <div className="flex flex-cols w-full gap gap-2  bg-[#E1E5F2] py-3">
                <div className="border bottom-2">
                    <img
                        src={h1}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold">Jogging Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] font-semibold">Rs 3,000</span>
                </div>
                <div className="border bottom-2">
                    <img
                        src={h2}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold">Cool Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] font-semibold">Rs 2,000</span>
                </div>
                <div className="border bottom-2 ">
                    <img
                        src={h3}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold">Jordan Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] font-semibold ">Rs 7,000</span>
                </div>
                <div className="">
                    <img
                        src={h4}
                        alt='h1 err'
                        width={375}
                        className="rounded-lg"
                    />
                    <span className="flex justify-center text-2xl font-[poppins] font-semibold ">Special Edition</span>
                    <span className="flex justify-center text-xl py-3 bg-[#E1E5F2] border bottom-6 font-semibold">Rs 10,000</span>
                </div>



            </div>
            
        </div>

    )
}

export default Cards