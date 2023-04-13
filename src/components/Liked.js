import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode} from 'swiper'
import "swiper/css";
import "swiper/css/free-mode";
function Liked() {
  return (
    <div>
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
  <img className="w-full relative" src="https://picsum.photos/id/37/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-white text-[30px] font-bold'>52 BARS</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">52 BARS | KARAN AUJLA</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/39/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>GAME </span>
  <i class="absolute bottom-5 right-6 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">GAME OVER | KARAN</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/41/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>DEVIL</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">DEVIL HIP HOP BEATS</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/47/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>BONES</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">IMAGINE DRAGON BEATS</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/18/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>ON TOP</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">ON TOP VIBES KARAN AUJLA</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/13/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>CAT WALK</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">CHAINSMOKERS ERA</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/51/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>ALONE</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">RELAX ALAN WALKER HERE</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/575/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>SPACE-X</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">SONG TO TOUCH SPACE</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/65/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>BAD LOVE</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">HALSEY WITH LOVE TONE</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/75/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>SADNESS</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">SAD CURING FREE SONGS</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/247/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>NATURE</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#68B984]">NATURE LOVING SONGS</div>
  
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
  <img className="w-full relative" src="https://picsum.photos/id/37/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-white text-[30px] font-bold'>GOD-PLAN</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">DRAKE GOD VIBES LYRICS</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/399/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>ANTHEM</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">RELAX WITH PARTY MUSIC</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/403/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>FLOP</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">FLOW HIP HOP BEATS</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/407/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>SPARKS</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">THUNDER LIGHTNING SHOW</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/63/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>BE THE ONE</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">DUALIPA LOVE VIBES</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/153/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>CAN'T SAY</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">Listen chainsmokers songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/505/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>AM I GOD?</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">Relax LoneWolf songs for u</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/57/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>DON'T GO</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#FF6000]">RELAX, INDULDGE WITH AUJLA</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/890/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>SEA FLOW</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">RELAX BY ED-SHEERAN</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/938/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>PEAKS</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">PEAKS BY FORTY6 DHS</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/785/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>Nature</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
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
  <i class="absolute bottom-5 right-6 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with Piano</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/399/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>PeaceFul</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">Relax  with PeaceFul Music</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/403/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>Focus </span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">Focusing Hip Hop Beats </div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/407/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>Festivals</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">Enjoy with Festivals Beats</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/385/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>Travel</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">Travel with our Songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/453/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>Concerts</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">Listen chainsmokers songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/505/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>Alone</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">Relax LoneWolf songs for u</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/575/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>Space</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with space</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/675/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>Rivers</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">Relax with Rivers tune</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/775/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>Depressed</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">Depressed free songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/785/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>Nature</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
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
  <i class="absolute bottom-5 right-6 text-[25px] text-[#03C988] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with Piano</div>
  
  </div>
 
</div>

      </SwiperSlide>

      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#460C68]">
  <img className="w-full relative" src="https://picsum.photos/id/399/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-purple-700 text-[30px] font-bold'>PeaceFul</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-purple-700 rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-purple-700">Relax  with PeaceFul Music</div>
  
  </div>
 
</div>

      </SwiperSlide>


      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#D61355]">
  <img className="w-full relative" src="https://picsum.photos/id/403/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#D61355] text-[30px] font-bold'>Focus </span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#D61355] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#D61355]">Focusing Hip Hop Beats </div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#EBB02D]">
  <img className="w-full relative" src="https://picsum.photos/id/407/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#EBB02D] text-[30px] font-bold'>Festivals</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#EBB02D] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#EBB02D]">Enjoy with Festivals Beats</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#3F497F]">
  <img className="w-full relative" src="https://picsum.photos/id/385/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#3F497F] text-[30px] font-bold'>Travel</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#3F497F] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#3F497F]">Travel with our Songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#16FF00]">
  <img className="w-full relative" src="https://picsum.photos/id/453/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#16ff00] text-[30px] font-bold'>Concerts</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#16FF00] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#16FF00]">Listen chainsmokers songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#0E8388]">
  <img className="w-full relative" src="https://picsum.photos/id/505/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#0e8388] text-[30px] font-bold'>Alone</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#0E8388] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#0E8388]">Relax LoneWolf songs for u</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#FF6000]">
  <img className="w-full relative" src="https://picsum.photos/id/575/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#ff6000] text-[30px] font-bold'>Space</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#FF6000] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-white">Relax and induldge with space</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#B46060]">
  <img className="w-full relative" src="https://picsum.photos/id/675/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#B46060] text-[30px] font-bold'>Rivers</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#B46060] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#B46060]">Relax with Rivers tune</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#569DAA]">
  <img className="w-full relative" src="https://picsum.photos/id/775/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#569DAA] text-[30px] font-bold'>Depressed</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#569DAA] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#569DAA]">Depressed free songs</div>
  
  </div>
 
</div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="w-[200px] rounded overflow-hidden shadow-lg ml-10 mt-4 hover:shadow-[#68B984]">
  <img className="w-full relative" src="https://picsum.photos/id/785/367/267" alt="Sunset in the mountains"/>
  <span className='absolute top-1/3 left-20 text-[#68B984] text-[30px] font-bold'>Nature</span>
  <i class="absolute bottom-5 right-6 text-[25px] text-[#68B984] rounded-full  fa-sharp fa-solid fa-circle-play"></i>
  <div className="px-6 py-4 bg-black">
    <div className="font-bold text-md mb-2 text-[#68B984]">Nature Loving songs</div>
  
  </div>
 
</div>

      </SwiperSlide>




      </Swiper>

     </div>
    </div>
    </>
    </div>
  )
}

export default Liked
