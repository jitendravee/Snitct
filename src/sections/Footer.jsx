import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
<div className="flex flex-cols bg-[#33415c]">
    <ul className="grid gap-x-10 grid-cols-4 font-[poppins] font-semibold text-white py-5 text-xl">
        <li>Contact Us</li>
        <li>Email ID</li>
        <li>Phone no</li>
        <li>Customer care</li>
    </ul>

</div>
<div className="flex justify-center items-center text-lg bg-[#33415c] text-white gap-3">
Copyright reserved Made with love
<FaHeart />
</div>

    </div>
  )
}
export default Footer