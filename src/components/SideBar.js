import React from 'react'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <>
    <div className='w-[300px] bg-black text-white pr-10 '>
     <div className='flex items-center justify-start mb-4 mt-2'>
     <img className='w-[140px] ml-4' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='/' />
     
     </div>
     <div className='ml-4 text-2xl text-gray-200 text-center mt-10 font-bold hover:text-[#3CCF4E] flex  items-center justify-start'>
     <i class="fa-solid fa-house mr-2"></i>
     <Link to="/Home">HOME</Link>
     </div>
     <div className='ml-4 text-2xl text-gray-200 text-center mt-10 font-bold hover:text-[#3CCF4E] flex  items-center justify-start'>
     <i class="fa-solid fa-magnifying-glass mr-2"></i>
     <Link to="/Search">SEARCH</Link>
     </div>
     <div className='ml-4 text-2xl text-gray-200 text-center mt-10 font-bold hover:text-[#3CCF4E] flex  items-center justify-start'>
      
     <i class="fa-regular fa-heart mr-2"></i>
     <Link to="/Liked">LIKED SONGS</Link>
     </div>
     <div className='ml-4 text-2xl text-gray-200 text-center mt-10 font-bold hover:text-[#3CCF4E] flex  items-center justify-start'>
     <i class="fa-solid fa-music mr-2"></i>
     <Link to="/Playlist">PLAYLIST</Link>
     </div>
     <div className='ml-4 text-2xl text-gray-200 text-center mt-10 font-bold hover:text-[#3CCF4E] flex  items-center justify-start'>
     <i class="fa-light fa-plus mr-2 "></i>
     <Link to="/Library">LIBRARY</Link>
     </div>


     <div className='ml-4 mt-10'>
        <button className='rounded-lg w-[120px]' style={{border:'1px solid white'}}>&#128512;English</button>
     </div>
     
    </div>
         </>
  )
}

export default SideBar
