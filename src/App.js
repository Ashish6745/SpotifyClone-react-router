import Main from './components/Main'
import React from 'react'
import SideBar from './components/SideBar'
function App() {
  return (
    <div>
      <div className='flex bg-black h-full'>
        <SideBar/>
        <Main/>
      </div>
    </div>
  )
}

export default App
