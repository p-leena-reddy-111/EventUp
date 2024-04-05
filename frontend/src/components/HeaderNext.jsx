import React, { useEffect, useState } from 'react'
import banner from '../Banner.svg';
import { GrLinkNext } from "react-icons/gr";
import axios from 'axios';
import '../index.css';

const HeaderNext = () => {
  const [isLoaading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  const [shows,setShows]=useState();

  const generateThumbnailUrl=(originalUrl, width, height) =>{
    // Extract file ID from the original URL
    const fileId = originalUrl.match(/\/file\/d\/([^/]+)/)[1];

    // Construct the thumbnail URL with the file ID and desired width
    const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}-h${height}`;
    console.log(thumbnailUrl);

    return thumbnailUrl;
}


  const fetchRecommendedShows=async()=>
  {
    setIsLoading(true);
    try
    {
        const response=await axios.get("GitHub_Security_Issues_Cant_Include_Link");
        setShows(response.data);

    }
    catch(error)
    {
        setError(error);
    }
    finally{
        setIsLoading(false)
    }
  }
  useEffect(()=>{
    fetchRecommendedShows();
  },[])
  return (
    <div className='flex justify-center sm:mx-[20px] md:[60px] lg:mx-[130px] my-[20px]'>
        <div className='relative'>
            <img className='relative w-full h-[800px] object-cover opacity-95' src={banner} alt="/"/>
            <div className='hidden md:flex'>
                <div className='absolute top-[70px] left-[30px] md:top-[160px] md:left-[160px] mx-auto text-white'>
                    <p className='items-center text-4xl lg:text-6xl mb-8'>Discover Exciting Events Happening</p>
                    <p className='items-center text-4xl lg:text-6xl mb-8'>Near You-Stay Tuned for Updates!</p> 
                    <p className='mx-28 text-base text-center -translate-x-10 text-wrap'>Dorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,<br/> ac aliquet odio mattis. Class aptent taciti scociosqu ad litora torquent per conubia nostra, per</p>
                </div>
            </div>

            {/*Mobile View*/}
            <div className='md:hidden flex mx-20'>
                <div className='absolute top-[70px] left-[20px] mx-auto text-white'>
                    <p className='mx-[30px] text-center text-[32px] lg:text-7xl mb-8'>Discover Exciting Events Happening Near You - Stay Tuned for Updates!</p>
                    <p className='mx-[45px] text-base text-center'>Dorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac</p>
                </div>
            </div>
            {/*Desktop View*/}
            <div className='hidden md:flex'>
                <div className='absolute top-[600px] left-[180px] text-white'>
                    <p className='flex flex-row items-center text-white font-bold'>Recommended Shows<GrLinkNext size={20} className='ml-2'/></p>
                </div>
            </div>
            {/*Mobile View*/}
            <div className='md:hidden flex mx-20'>
                <div className='absolute top-[500px] left-[40px] mx-auto text-white'>
                    <p className='flex flex-row items-center text-white font-bold'>Recommended Shows<GrLinkNext size={20} className='ml-2'/></p>
                </div>
            </div>
            {/*Desktop View*/}
            <div className='absolute hidden md:flex top-[600px] left-40 mt-5'>
                <div className='relative flex'>
                    <div className='flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {
                            shows && shows.events.map((item,index) => (
                                    <img className='h-full hover:scale-105 ease-in-out duration-300 clip-custom'src={generateThumbnailUrl(item.imgUrl,350,400)} alt={item.eventName} />
                            ))
                            
                        }
                    </div>
                </div>
            </div>
            {/*mobile view*/}
            <div className='absolute top-[500px] left-[20px] mt-5'>
                <div className='relative flex md:hidden'>
                    <div className='flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {
                            shows && shows.events.map((item,index) => (
                                    <img className='h-full hover:scale-105 ease-in-out duration-300 clip-custom'src={generateThumbnailUrl(item.imgUrl,350,400)} alt={item.eventName} />
                            ))
                            
                        }
                    </div>
                </div>
            </div>
           {/* <div className='relative flex items-center gap-10'>
                    <div className='relative flex w-full h-full overflow-x-visible whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {
                            shows && shows.events.map((item,index) => (
                                    <img className='w-full h-full'src={generateThumbnailUrl(item.imgUrl,400,600)} alt={item.eventName} />
                            ))
                            
                        }
                    </div>
                    </div>*/}
        </div>  
    </div>
  )
}

export default HeaderNext
