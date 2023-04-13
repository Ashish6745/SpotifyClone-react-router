import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode} from 'swiper'
import "swiper/css";
import "swiper/css/free-mode";
function Songs() {
  return (
    <>
    <div className='bg-[#454545] '>
      <div className='text-3xl text-white font-bold  ml-10'>
       <a href="/">Focus</a>
      </div>
     <div className="flex items-center">
     <Swiper
       freeMode={true}
       grabCursor={true}
       modules={[FreeMode]}
       className='mySwipe'
       slidesPerView={5}
       spaceBetween={20}
      >

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#03c988]">
  <img className="w-full relative" src="https://picsum.photos/id/375/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-white text-[30px] font-bold'>Piano</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with Piano</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/399/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>PeaceFul</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">Relax  with PeaceFul Music</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/403/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>Focus </span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">Focusing Hip Hop Beats </div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/407/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>Festivals</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">Enjoy with Festivals Beats</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/385/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>Travel</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">Travel with our Songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/453/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>Concerts</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">Listen chainsmokers songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/505/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>Alone</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">Relax LoneWolf songs for u</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/575/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>Space</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with space</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/675/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>Rivers</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">Relax with Rivers tune</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/775/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>Depressed</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">Depressed free songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/785/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>Nature</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#68B984]">Nature Loving songs</div>
  
  </div>
 
</div>

      </SwiperSlide>




      </Swiper>

     </div>
     <div className="flex items-center">
     <Swiper
       freeMode={true}
       grabCursor={true}
       modules={[FreeMode]}
       className='mySwipe'
       slidesPerView={5}
       spaceBetween={20}
      >

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#03c988]">
  <img className="w-full relative" src="https://picsum.photos/id/375/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-white text-[30px] font-bold'>Piano</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with Piano</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/399/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>PeaceFul</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">Relax  with PeaceFul Music</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/403/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>Focus </span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">Focusing Hip Hop Beats </div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/407/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>Festivals</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">Enjoy with Festivals Beats</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/385/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>Travel</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">Travel with our Songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/453/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>Concerts</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">Listen chainsmokers songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/505/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>Alone</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">Relax LoneWolf songs for u</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/575/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>Space</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with space</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/675/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>Rivers</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">Relax with Rivers tune</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/775/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>Depressed</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">Depressed free songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/785/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>Nature</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#68B984]">Nature Loving songs</div>
  
  </div>
 
</div>

      </SwiperSlide>




      </Swiper>

     </div>
     <div className="flex items-center">
     <Swiper
       freeMode={true}
       grabCursor={true}
       modules={[FreeMode]}
       className='mySwipe'
       slidesPerView={5}
       spaceBetween={20}
      >

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#03c988]">
  <img className="w-full relative" src="https://picsum.photos/id/375/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-white text-[30px] font-bold'>Piano</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with Piano</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/399/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>PeaceFul</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">Relax  with PeaceFul Music</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/403/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>Focus </span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">Focusing Hip Hop Beats </div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/407/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>Festivals</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">Enjoy with Festivals Beats</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/385/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>Travel</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">Travel with our Songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/453/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>Concerts</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">Listen chainsmokers songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/505/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>Alone</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">Relax LoneWolf songs for u</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/575/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>Space</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with space</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/675/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>Rivers</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">Relax with Rivers tune</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/775/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>Depressed</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">Depressed free songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/785/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>Nature</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#68B984]">Nature Loving songs</div>
  
  </div>
 
</div>

      </SwiperSlide>




      </Swiper>

     </div>
     
     <div className="flex items-center">
     <Swiper
       freeMode={true}
       grabCursor={true}
       modules={[FreeMode]}
       className='mySwipe'
       slidesPerView={5}
       spaceBetween={20}
      >

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#03c988]">
  <img className="w-full relative" src="https://picsum.photos/id/375/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-white text-[30px] font-bold'>Piano</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with Piano</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/399/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>PeaceFul</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">Relax  with PeaceFul Music</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/403/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>Focus </span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">Focusing Hip Hop Beats </div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/407/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>Festivals</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">Enjoy with Festivals Beats</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/385/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>Travel</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">Travel with our Songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/453/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>Concerts</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">Listen chainsmokers songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/505/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>Alone</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">Relax LoneWolf songs for u</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/575/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>Space</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with space</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/675/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>Rivers</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">Relax with Rivers tune</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/775/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>Depressed</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">Depressed free songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/785/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>Nature</span>
  <i class="absolute bottom-5 right-2 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#68B984]">Nature Loving songs</div>
  
  </div>
 
</div>

      </SwiperSlide>




      </Swiper>

     </div>
    </div>
    </>
  )
}

export default Songs;
