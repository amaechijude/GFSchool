// import { useState } from 'react'
import Navbar from './Components/navbar';
import HeroSection from './Components/Herosection';
import AboutUs from "./Components/AboutUs";
import Academics from "./Components/Academics";
import Admissions from "./Components/Admissions";
import Events from './Components/Events';
// import ImageSlider from './Components/ImageSlider';
import Faculty from './Components/Faculty';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
// import { Bro}
import './App.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection className="pt-16" /> {/* Add padding-top here */}
      <AboutUs></AboutUs>
      {/* <ImageSlider></ImageSlider> */}
      <Academics></Academics>
      <Admissions></Admissions>
      <Events></Events>
      <Faculty></Faculty>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  );
}

export default App;