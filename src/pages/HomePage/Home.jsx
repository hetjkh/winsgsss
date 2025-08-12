import React, { useState, useMemo } from 'react';
import Navbar from '../../reusable/navbar';
import { Button } from '../../components/ui/button';
import hetImage from '../../assets/het.jpg';
import { ArrowUpRight, Star, Quote } from 'lucide-react';
import Footer from '../../reusable/footer';

import Header from '../../sections/header';
import Service from '../../sections/services';

import Popular from '../../sections/popular';
import Chooseus from '../../sections/chooseus';
import Review from '../../sections/review';
import Beforego from '../../sections/beforego';

const Home = () => {
 
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Header/>

      {/* Services Section */}
     <Service/>
      {/* Enhanced Popular Destinations Section */}
      <Popular/>
      {/* Why Choose Travel Agency Section */}
      <Chooseus/>

      {/* Customer Reviews Section */}
      <Review/>
      {/* Before You Go Section */}
      <Beforego/>
      {/* Full Screen Dubai Image Section */}
      
      {/* Footer */}
            <Footer />
    </div>
  );
}

export default Home;