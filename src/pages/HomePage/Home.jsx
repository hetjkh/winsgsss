import React, { useState } from 'react';
import Navbar from '../../reusable/navbar';
import { Button } from '../../components/ui/button';
import hetImage from '../../assets/het.jpg';
import { ArrowUpRight } from 'lucide-react';

// Import local images
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';
import image8 from '../../assets/8.jpg';
import image9 from '../../assets/9.jpg';

const services = [
    {
      id: 1,
      title: "AIR TICKETS",
      description: "We help you book the best domestic and international flights at great prices. Fast, simple, and stress-free.",
      image: image1
    },
    {
      id: 2,
      title: "VISA ASSISTANCE",
      description: "We guide you through the whole visa process—forms, documents, appointments—so you get approval without the hassle.",
      image: image2
    },
    {
      id: 3,
      title: "TOUR PACKAGES",
      description: "Choose from local and international tour packages. Whether you want relaxation, or fun—we have something for everyone.",
      image: image3
    },
    {
      id: 4,
      title: "Hotel RESERVATIONS",
      description: "Find and book the perfect accommodation for your stay. From luxury resorts to budget-friendly options.",
      image: image4
    },
    {
      id: 5,
      title: "TRAVEL INSURANCE",
      description: "Protect your trip with comprehensive travel insurance. Coverage for medical emergencies, trip cancellations, and more.",
      image: image5
    },
    {
      id: 6,
      title: "TRANSFERS",
      description: "Reliable airport transfers and local transportation. Door-to-door service for a hassle-free journey.",
      image: image6
    },
    {
      id: 7,
      title: "ITINERARY PLANNING",
      description: "Custom itineraries designed around your interests. Make the most of every moment of your trip.",
      image: image7
    },
    {
      id: 8,
      title: "24/7 SUPPORT",
      description: "Round-the-clock assistance whenever you need it. Our team is always here to help during your travels.",
      image: image8
    },
    {
      id: 9,
      title: "TRAVEL CONSULTATION",
      description: "Expert advice and personalized recommendations. Let us help you plan the perfect adventure.",
      image: image9
    }
];

const destinations = [
  {
    id: 1,
    name: "MALDIVES",
    country: "TROPICAL PARADISE",
    description: "Paradise of white-sand beaches and turquoise waters where palm trees sway and sunsets dazzle.",
    attractions: "Coral reefs, private islands, boat rides",
    activities: "Snorkeling, beach dining, cruises",
    bestTime: "Nov - Apr",
    cuisine: "Seafood, tropical fruits",
    image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "EUROPE",
    country: "DIVERSE CONTINENT",
    description: "Rich history, stunning architecture, and diverse cultures await in this magnificent continent of endless discoveries.",
    attractions: "Historic castles, art museums, ancient ruins",
    activities: "City tours, wine tasting, cultural experiences",
    bestTime: "May - Sep",
    cuisine: "Mediterranean, French, Italian",
    image: "https://images.pexels.com/photos/161901/paris-france-tower-eiffel-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "PARIS",
    country: "CITY OF LIGHT",
    description: "Romance, art, and elegance converge in the world's most beautiful city, where every corner tells a story.",
    attractions: "Eiffel Tower, Louvre, Notre-Dame",
    activities: "Seine cruises, café culture, shopping",
    bestTime: "Apr - Jun, Sep - Nov",
    cuisine: "French pastries, wine, gourmet dining",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "ROME",
    country: "ETERNAL CITY",
    description: "Ancient wonders and timeless beauty blend seamlessly in this historic capital of art, culture, and cuisine.",
    attractions: "Colosseum, Vatican, Trevi Fountain",
    activities: "Historical tours, food experiences, art galleries",
    bestTime: "Apr - Jun, Sep - Oct",
    cuisine: "Authentic pasta, pizza, gelato",
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "TOKYO",
    country: "MODERN METROPOLIS",
    description: "Where ancient traditions meet cutting-edge technology in a vibrant city that never sleeps.",
    attractions: "Tokyo Tower, temples, modern districts",
    activities: "Sushi tours, shopping, cultural experiences",
    bestTime: "Mar - May, Sep - Nov",
    cuisine: "Sushi, ramen, traditional Japanese",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const whyChooseReasons = [
  {
    id: 1,
    title: "EXPERTISE AND PERSONALIZED SERVICE",
    description: "Travel agents are experienced professionals who can offer tailored advice based on your preferences, budget, and travel style. They can recommend destinations, accommodations, and activities that ensuring the trip is uniquely suited to travel"
  },
  {
    id: 2,
    title: "TIME AND STRESS SAVINGS",
    description: "Planning a trip, especially a complex one, can be time-consuming and stressful. Travel agents handle all the details, from booking flights and hotels to arranging transportation and excursions."
  },
  {
    id: 3,
    title: "ACCESS TO EXCLUSIVE DEALS AND PERKS",
    description: "Travel agencies often have access to exclusive deals, promotions, and perks that are not available to the public. These can include complimentary room upgrades, resort credits, special tours, and more, adding significant value to your booking."
  },
  {
    id: 4,
    title: "SAFETY AND SECURITY",
    description: "Travel agents are well-versed in travel advisories and can provide essential information on visa requirements, health and safety precautions. This expertise is particularly valuable for international travel, providing peace of mind and ensuring a smoother journey."
  },
  {
    id: 5,
    title: "SAFE, SECURE & TRANSPARENT",
    description: "We value your trust. That's why we offer clear pricing, secure payments, and honest communication. No hidden charges, no last-minute surprises—just smooth, reliable service from start to finish."
  },
  {
    id: 6,
    title: "WIDE NETWORK OF GLOBAL PARTNERS",
    description: "We work with trusted airlines, hotels, tour operators, and transport vendors across the world. This means better deals, priority service, and exclusive travel options that you won't find anywhere else. Wherever you're going, our global connections make your journey smoother and more affordable."
  }
];

const Home = () => {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 max-w-xl">
            <h1 
              className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight"
              style={{ fontFamily: '"Bodoni Bd BT", serif' }}
            >
              WE PROVIDE SEAMLESS SECURE, AND STRESS FREE TRAVEL EXPERIENCES TAILORED JUST FOR YOU.
            </h1>
            
            <div className="space-y-3">
              <p className="text-base font-semibold text-black">Your Next Adventure Starts Here</p>
              <p className="text-base font-semibold text-black">
                Ready to explore? We're a team of passionate travelers dedicated to making your dream vacation a reality. Whether you're seeking a relaxing beach getaway, a thrilling mountain expedition, or an immersive cultural tour, we've got you covered.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8">
              <Button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300">
                SERVICES
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300">
                CONTACT AN EXPERT
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-xl">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={hetImage}
                alt="Travel experience"
                className="w-full h-auto max-h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h2 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Bodoni Bd BT", serif' }}
            >
              OUR SERVICES
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              We take care of everything you need for a smooth and enjoyable trip. From booking flights to helping with visas and more—we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-6xl mx-auto px-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-black/30 hover:bg-black/50 transition-all duration-500 cursor-pointer h-[400px] w-full max-w-[300px] mx-auto my-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0 group-hover:bg-black/40 transition-all duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 line-clamp-6 mt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Icon - Bottom Left */}
                  <div className="mt-auto pt-4">
                    <div className="w-8 h-8 rounded-full border border-white/30 group-hover:border-white flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Popular Destinations Section */}
      <section 
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${selectedDestination.image}')`
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-all duration-700"></div>
        
        {/* Content Container */}
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-6 py-8 md:py-10">
          
          {/* Header Section */}
          <div className="mb-10">
            <div className="max-w-4xl">
              <h2 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 tracking-wide"
                style={{ fontFamily: '"Bodoni Bd BT", serif' }}
              >
                POPULAR DESTINATIONS
              </h2>
              <p className="text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl">
                Discover our handpicked selection of dream destinations. From beach retreats to cultural expeditions, find your perfect getaway.
              </p>
            </div>
          </div>

          {/* Featured Destination Details */}
          <div className="mb-10">
            <div className="max-w-4xl">
              <h3 
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-wider leading-none transition-all duration-500"
                style={{ fontFamily: '"Bodoni Bd BT", serif' }}
              >
                {selectedDestination.name}
              </h3>
              
              <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-6 tracking-widest">
                {selectedDestination.country}
              </p>
              
              <p className="text-lg lg:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl">
                {selectedDestination.description}
              </p>

              {/* Destination Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-sm tracking-wide">ATTRACTIONS</h4>
                  <p className="text-sm text-white/90 leading-relaxed">{selectedDestination.attractions}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-sm tracking-wide">ACTIVITIES</h4>
                  <p className="text-sm text-white/90 leading-relaxed">{selectedDestination.activities}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-sm tracking-wide">BEST TIME</h4>
                  <p className="text-sm text-white/90 leading-relaxed">{selectedDestination.bestTime}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-sm tracking-wide">CUISINE</h4>
                  <p className="text-sm text-white/90 leading-relaxed">{selectedDestination.cuisine}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Destinations Grid */}
          <div className="mt-auto">
            <div className="mb-8">
              <h4 className="text-xl lg:text-2xl font-semibold text-white/90 tracking-wide">
                Explore Destinations
              </h4>
            </div>
            
            <div className="flex flex-wrap justify-start gap-6 lg:gap-8">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  onClick={() => handleDestinationClick(destination)}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-110 shadow-2xl ${
                    selectedDestination.id === destination.id 
                      ? 'ring-4 ring-yellow-400 scale-105' 
                      : 'hover:shadow-yellow-400/20'
                  }`}
                  style={{ 
                    width: '160px', 
                    height: '200px' 
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    selectedDestination.id === destination.id 
                      ? 'bg-black/30' 
                      : 'bg-black/50 group-hover:bg-black/40'
                  }`}></div>

                  {/* Content */}
                  <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                    <div className="text-center">
                      <h5 className={`font-bold text-sm mb-1 tracking-wide transition-colors duration-300 ${
                        selectedDestination.id === destination.id 
                          ? 'text-yellow-400' 
                          : 'text-white group-hover:text-yellow-400'
                      }`}>
                        {destination.name}
                      </h5>
                      <p className="text-white/80 text-xs tracking-wider">
                        {destination.country}
                      </p>
                    </div>
                    
                    {/* Active Indicator */}
                    {selectedDestination.id === destination.id && (
                      <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Travel Agency Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-left mb-12 max-w-4xl">
            <h2 
              className="text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: '"Bodoni Bd BT", serif' }}
            >
              WHY CHOOSE TO BOOK WITH A TRAVEL AGENCY?
            </h2>
            <p className="text-sm text-gray-600">
              With years of experience and a passion for travel, we make sure every trip is smooth, safe, and perfectly planned. Here's why thousands of travelers choose us.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason) => (
              <div
                key={reason.id}
                className="group bg-gray-100 hover:bg-gray-50 p-8 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg flex flex-col h-full"
              >
                <div className="flex-grow space-y-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="mt-6">
                  <div className="w-8 h-8 rounded-full border border-gray-300 group-hover:border-gray-400 flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;