import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* <video class="min-w-full min-h-full absolute object-cover" src="https://www.youtube.com/watch?v=jaVdD4Z8UCs" type="video/mp4" autoplay muted loop></video> */}
  
        <iframe className='min-w-full min-h-full absolur object-cover' src="https://www.youtube.com/embed/jaVdD4Z8UCs" title="YouTube video player" frameBorder="0" autoPlay muted loop></iframe>
    </div>
    <div className="video-content space-y-2">
        <h1 className="font-bond text-green-500 text-6xl">Watch   full Hero Video</h1>
        <h3 className="font-bond text-green-500 text-3xl">with Me</h3>
        <button className="font-bond text-green-500 text-3xl">PLAY ME</button>

    </div>
</section>

  
    </div>
  )
}

export default Home
