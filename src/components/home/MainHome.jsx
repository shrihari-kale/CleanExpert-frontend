import React from 'react'
import Hero from './hero/Hero';
import About from './Section1/About';
import ServicePage from './service/ServicePage';
import Section3 from './section3/Section3';
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import ContactPage from './contact-page/ContactPage';
import { NewsLetter } from './newslatter/NewsLetter';
import Footer from '../Footer';

const MainHome = () => {
  return (
    <div>
      <Hero />
      <About />
      <ServicePage/>
      <Section3 />
      <Section4 />
      <Section5 />
      <ContactPage/>
      <NewsLetter/> 
      <Footer/> 
    </div>
  );
}

export default MainHome;