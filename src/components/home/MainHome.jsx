import React from 'react'
import Hero from './1_hero/Hero';
import About from './2About_Section/About';
import ServicePage from './3our-services/ServicePage';
// import Section3 from './section3/Section3';
import Section4 from "./4How_it_work/Section4";
import Section5 from "./5Why_choose/Section5";
import ContactPage from './6contact-page/ContactPage';
import Footer from '../Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const MainHome = () => {
  useEffect(() => {
    AOS.init({
      duration:800,
      once:true,
      offset:100,
      easing:"ease-in-out",
    });
  },[]);

  return (
    <div>
      <Hero />
      <About />
      <ServicePage/>
      {/* <Section3 /> */}
      <Section4 />
      <Section5 />
      <ContactPage/>
      {/* <NewsLetter/>  */}
      <Footer/> 
    </div>
  );
}

export default MainHome;