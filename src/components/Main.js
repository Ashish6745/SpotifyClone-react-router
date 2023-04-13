import React from 'react'
import Songs from './Songs'

function Main() {
  return (
    <>
   <div className='w-[80%]'>
     <div className='bg-[#191919] w-full text-white flex px-2 py-2 items-center justify-between '>
         <div className='flex items-center justify-start '>
        <div>
        <i class="fa-solid fa-angle-left  text-2xl rounded-full bg-[#000000] px-2 py-2  hover:bg-[#20262E]"></i>

        </div>
        <div className='ml-4'>
        <i class="fa-solid fa-angle-right  text-2xl rounded-full bg-[#000000] px-2 py-2  hover:bg-[#20262E]"></i>
        
        </div>
     </div>

     <div className='flex items-center text-md'>
        <div>
            <button className='text-gray-500 font-bold mr-8 hover:bg-[#03C988] hover:text-white rounded-full px-2 py-2'>SignUp</button>
        </div>
        <div>
            <button className='text-[#191919] bg-white font-bold rounded-full w-[120px] py-2 px-2 animate-bounce'>Login</button>
        </div>
     </div>
    </div>
   <Songs/>
   
   </div>
   </>
  )
}

export default Main
