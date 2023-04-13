import React from 'react'

function Search() {
  return (
    <div className='bg-black  text-white'>
     <nav class="flex items-center justify-between flex-wrap bg-[#68B984] p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/3000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="tracking-tight hover:text-[#11361e] font-bold text-2xl">Spotify</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="Home" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#11361e] font-bold text-2xl mr-4">
      Home
      </a>
      <a href="Songs" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#12361f] font-bold text-2xl mr-4">
        Songs
      </a>
      <a href="Liked" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0e351c] font-bold text-2xl">
        Liked
      </a>
    </div>
    <div className='w-[300px] mr-5 '>
      <input className='w-full indent-4 rounded-full py-2 px-2 text-black outline-none' type='text' placeholder='search your fav music' />
    </div>
    <div>
      <a href="/" class="inline-block  px-4 py-2 leading-none border font-bold  text-xl rounded text-white border-white hover:border-transparent hover:text-[#11361e] hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>



    {/* FLEX BOX STARTS HERE  */}
    <div class="flex mt-10 gap-20 ml-40">
  <div class="relative  w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/490/367/267')]">
    <span className='absolute top-5 left-5 font-bold text-[25px] text-[#367E18]'>TELUGU</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/550/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#3F497F]'>MADE FOR YOU</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/663/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#400E32]'>CHARTS</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/550/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#9A208C]'>NEW RELEASES</span>
  </div>
  
 
</div>
<div class="flex mt-10 gap-20 ml-40">
  <div class="relative  w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/630/367/267')]">
    <span className='absolute top-5 left-5 font-bold text-[25px] text-[#FF6000]'>LIVE EVENTS</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/773/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#E86A33]'>BOLLYWOOD</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/774/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#E7B10A]'>PUNJABI</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/550/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#CF0A0A]'>TAMIL</span>
  </div>
  
 
</div>
<div class="flex mt-10 gap-20 ml-40">
  <div class="relative  w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/63/367/267')]">
    <span className='absolute top-5 left-5 font-bold text-[25px] text-[#A62349]'>LIVE EVENTS</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/77/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#42032C]'>INDIE</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/784/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#003865]'>GAMING</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/950/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#434b42]'>RADAR</span>
  </div>
</div>

<div class="flex mt-10 gap-20 ml-40">
  <div class="relative  w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/613/367/267')]">
    <span className='absolute top-5 left-5 font-bold text-[25px] text-[#D61C4E]'>FRESH FINDS</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/77/567/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#FEB139]'>MARATHI</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/84/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#7B2869]'>SUMMER</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/900/367/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#169a93]'>WELLNESS</span>
  </div>
</div>

<div class="flex mt-10 gap-20 ml-40">
  <div class="relative  w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/69/367/267')]">
    <span className='absolute top-5 left-5 font-bold text-[25px] text-[#820000]'>ROMANCE</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/77/507/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#143F6B]'>K-POP</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/84/321/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#3F0713]'>NETFLIX</span>
  </div>
  <div class="relative w-[200px]  h-[200px] rounded-3xl bg-[url('https://picsum.photos/id/900/867/267')] ">
  <span className='absolute top-5 left-5 font-bold text-[25px] text-[#D44000]'>PARTY</span>
  </div>
</div>


    </div>
  )
}

export default Search
