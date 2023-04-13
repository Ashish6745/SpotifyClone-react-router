import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Library from './components/Library';
import Liked from './components/Liked';
import Playlist from './components/Playlist';
import Search from './components/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/Home' element={<Home/>}/>
    <Route path='Library' element={<Library/>} />
    <Route path='/Liked' element={<Liked/>}/>
    <Route path='/Playlist' element={<Playlist/>}/>
    <Route path='/Search' element={<Search/>}/>
    
  </Routes>
</Router>
);

