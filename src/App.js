import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomRouter from './Router/CustomRouter';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <CustomRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
