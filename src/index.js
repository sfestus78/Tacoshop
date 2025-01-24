import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Hours } from './components/hours'
import { About } from './components/about'
import { Contact } from "./components/contact"
import { Menu } from "./components/menu"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    
    <Router>

      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='menu' element={<Menu/>} />
        <Route path='hours' element={<Hours/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        {/* <Route path='*' element={<NotFound/>} /> */}
        
      
      </Routes>
    </Router> 
    {/* <App /> */}
  </React.StrictMode>
);

