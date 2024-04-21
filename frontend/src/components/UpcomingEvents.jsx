import React, { useEffect, useState } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import axios from 'axios';
import { RxDividerVertical } from "react-icons/rx";


const UpcomingEvents = () => {
  const [isLoading,setIsLoading]=useState(false);
  const [shows,setShows]=useState();
  const [error,setError]=useState(null);
  const [count,setCount]=useState(0);

  const fetchUpcomingEvents=async()=>{
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

  const changeKM=(distance)=>{
    return Math.round(distance/1000); // convert to Km
  }
  
  const getMonth=(dateString) =>{
    // Parse the date string into a JavaScript Date object
    const date = new Date(dateString);
  
    // Get the month as a number (0-11)
    const month = date.getMonth();
    // Create an array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
  
    // Return an object with month, year, and date
    return monthNames[month];

  }


  useEffect(()=>{
    fetchUpcomingEvents()
  },[])

  const generateThumbnailUrl=(originalUrl, width, height) =>{
    // Extract file ID from the original URL
    const fileId = originalUrl.match(/\/file\/d\/([^/]+)/)[1];

    // Construct the thumbnail URL with the file ID and desired width
    const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}-h${height}`;
    console.log(thumbnailUrl);

    return thumbnailUrl;
   }

  return (
    <div className='mt-[130px] md:mt-[240px] flex flex-col justify-start mx-[90px] lg:mx-[290px] max-width-[1640px]'>
        <div className='flex items-center'>
            <p className='font-bold'>Upcoming Events</p>
            <span className='ml-3'><GrLinkNext/></span>
        </div>
        <div className='grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 my-4 gap-5 w-full h-full object-cover'>
        {
                shows && shows.events.map((item,index)=>(
                       <div className='w-full h-full items-start rounded-md pb-3 border-2 hover:scale-105 ease-in-out duration-300'>
                           <div className='flex flex-col'>
                            <div className='relative'>
                               <img  className='relative w-full h-full object-cover' src={generateThumbnailUrl(item.imgUrl,250,300)} alt={item.eventName} loading='lazy'/>
                               <div className="absolute inset-x-4 md:inset-x-3 bottom-4 rounded-md h-[45px] bg-black opacity-60"  />
                               <div className='bg-black flex flex-row'>
                                  <p className='absolute text-white top-[82%] md:top-[78%] left-6'>{getMonth(item.date)} {new Date(item.date).getDate()}, {new Date(item.date).getFullYear()}</p>
                               </div>
                            </div>  
                            <p className='flex mt-4 mx-4 font-bold'>After Note Early</p>
                           </div>
                           <div className='text-sm flex flex-row items-center justify-between mx-3'>
                                  <div className='flex flex-row items-center'>
                                    <HiLocationMarker size={20} className='fill-gray-400'/>
                                    <p>{item.cityName}</p>
                                   </div> 
                                   <div className='flex flex-row items-center'>
                                      <p>{item.weather}</p> 
                                      <RxDividerVertical/>
                                      <p>{changeKM(item.distanceKm)} km</p>
                                    </div>
                            </div>
                      </div>

                ))
        }
        </div>
    </div>
  )
}

export default UpcomingEvents
