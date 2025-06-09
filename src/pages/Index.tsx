
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Accommodations from '@/components/Accommodations';
import Amenities from '@/components/Amenities';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {


  useEffect(()=>{
    let url =(window.location.href).split('#')[1];
    if(url){
      const element = document.getElementById(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  })

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Accommodations />
        <Amenities />
        <WhyChoose />
        <Testimonials />
        <Gallery />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
