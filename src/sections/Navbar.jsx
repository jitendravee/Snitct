import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import sneakers from '../sneakers.png';


const Navbar = () => {
  function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
  }
  return (

    <div className="">
      <div className="flex  text-3xl  lg:text-5xl bg-[#f8f7ff] w-full justify-center font-bold items-center py-2  md:text-4xl ">
        SNITCT
        <img
        src={sneakers}
        alt='logo'
       
        className="h-10 px-3 "
        />
      </div>
      <div>


        <ul class="justify-between md:flex  bg-[#E1E5F2] md:items-center z-[-1] lg:text-3xl md:z-auto md:static  w-full left-0 md:w-auto absolute  md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li class="mx-4 my-6 md:my-0">
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">HOME</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">SERVICE</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">CONTACT</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">BLOG'S</a>
          </li>
          <li><button class="bg-[#022B3A] py-4 text-white font-[Poppins] duration-500 px-6  mx-4 hover:bg-cyan-500 rounded ">
          Get started
        </button></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar