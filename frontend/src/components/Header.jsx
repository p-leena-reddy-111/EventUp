import React from 'react'
import { MdOutlineFavorite } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' mx-[30px] md:mx-[120px] lg:mx-[200px] mt-[30px]'>
      <div className='flex flex-row items-center justify-between'>
        {/*BookUsNow*/}
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-start'>
                    <p className='text-red-500 font-extrabold text-xl'>BookUsNow</p>
                </div>
            </div>

        {/*Categories and Search Bar*/}

            <div className='hidden lg:flex flex-row items-center'>
                <button className=' flex flex-row items-center bg-black text-white p-2 rounded-md mr-4'><IoMenu className='mr-2'/>Categories</button>
                    <div className='border-2 rounded-md bg-border-100 min-w-[400px] max-w-[600px]'>
                        <div className='flex flex-row items-center justify-between px-3 py-2'>
                            <input className='bg-transparent w-full focus:outline-none' type='text' placeholder='Search'/>
                            <FaSearch  size={18}className='flex justify-end text-gray-300'/>
                        </div>
                    </div>

                {/*Favorites and Sign In*/}
                <div className='flex flex-row items-center ml-14'>
                    <div className='flex flex-row items-center'>
                    <MdOutlineFavorite size={25} className='fill-gray-300 mr-2'/>
                    <p className='sm:hidden md:flex'>Favorites</p>
                    <button className='hidden lg:flex border-2 bg-border-100 p-2 rounded-md ml-5 whitespace-nowrap'>Sign In</button>
                    <FaUser className='flex md:hidden'/>
                    </div>
                </div>
            </div>

            {/*Mobile View*/}
            <div className='md:hidden flex flex-row justify-between items-center gap-4'>
                    <FaSearch  size={18} className='text-gray-300'/>
                    <MdOutlineFavorite size={18} className='fill-gray-300'/>
                    <FaUser size={18} className='text-gray-300'/>
            </div>
        </div>

        <div className='flex flex-row items-center mt-[20px]'>
            <div className='hidden md:flex flex-row items-center'>
                            <HiLocationMarker size={25} className='mr-3 text-gray-400'/>
                            <div className='flex flex-row items-center'>
                                <p className='whitespace-nowrap'>Mumbai, India</p>
                                <MdNavigateNext className='text-gray-400'/>
                            </div>
            </div>
            <div className='text-sm flex flex-row  gap-10 md:ml-56 overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap'>
                        <p>Live shows</p>
                        <p>Streams</p>
                        <p>Movies</p>
                        <p>Plays</p>
                        <p>Events</p>
                        <p>Sports</p>
                        <p>Activities</p>
            </div>
        </div>
    </div>
  )
}

export default Header
