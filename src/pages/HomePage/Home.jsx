import React, { useState, useMemo } from 'react';
import Navbar from '../../reusable/navbar';
import { Button } from '../../components/ui/button';
import hetImage from '../../assets/het.jpg';
import { ArrowUpRight, Star, Quote } from 'lucide-react';
import Footer from '../../reusable/footer';

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
      title: "HOTEL RESERVATIONS",
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
    description: "Our team of certified travel professionals brings years of industry experience to craft your perfect journey. We take the time to understand your unique travel style, preferences, and budget to create a customized itinerary that exceeds your expectations. From romantic getaways to family vacations and business trips, we provide personalized recommendations for destinations, accommodations, and activities that align perfectly with your vision of the perfect trip."
  },
  {
    id: 2,
    title: "TIME AND STRESS SAVINGS",
    description: "Planning a trip, especially to multiple destinations, can be an overwhelming task that consumes countless hours. Our travel experts handle every detail meticulously - from securing the best flight options and hotel bookings to arranging local transportation and exclusive excursions. We navigate the complexities of travel planning so you can focus on the excitement of your upcoming adventure. With us, you'll save an average of 15-20 hours of research and planning time per trip."
  },
  {
    id: 3,
    title: "ACCESS TO EXCLUSIVE DEALS AND PERKS",
    description: "Through our extensive network of global partners and premium memberships, we unlock exclusive benefits that aren't available to the general public. Enjoy complimentary room upgrades, early check-in/late check-out privileges, resort credits, special dining experiences, and VIP treatment at top destinations worldwide. Our clients regularly save up to 30% on luxury accommodations and receive added value that enhances their travel experience without increasing their budget."
  },
  {
    id: 4,
    title: "SAFETY AND SECURITY",
    description: "Your well-being is our top priority. We stay updated with the latest travel advisories, health requirements, and safety protocols for every destination. Our team provides comprehensive pre-trip briefings, including essential information on local customs, emergency contacts, and health precautions. We offer 24/7 emergency assistance during your travels, ensuring you have support whenever you need it, wherever you are in the world."
  },
  {
    id: 5,
    title: "SAFE, SECURE & TRANSPARENT",
    description: "We believe in complete transparency and integrity in all our dealings. Our pricing is clear and comprehensive, with no hidden fees or surprise charges. We use secure payment gateways to protect your financial information and offer flexible cancellation policies. Our team maintains open communication throughout the booking process and beyond, providing regular updates and being available to address any questions or concerns you might have about your travel plans."
  },
  {
    id: 6,
    title: "WIDE NETWORK OF GLOBAL PARTNERS",
    description: "Our strategic partnerships with over 5,000 travel providers across 100+ countries give us unparalleled access to the best rates and premium services. Whether you're looking for a luxury resort in the Maldives, a boutique hotel in Paris, or an adventure tour in New Zealand, our global connections ensure you receive priority treatment and exclusive access. Our established relationships mean we can often secure last-minute bookings and special arrangements that aren't available through online booking platforms."
  }
];

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Dubai",
    rating: 5,
    review: "Booking with Wings & Wheels was the best decision I made for my Dubai trip. From the moment I contacted them, their team was super helpful and friendly. They handled my flight bookings, visa, hotel stay, and even airport transfers so smoothly. I didn't have to worry about anything. They also customized the package to fit my budget without compromising on quality. I loved how responsive they were—even at odd hours. This wasn't just a trip, it was a truly relaxing experience thanks to their planning. I'll definitely recommend them to my friends and family.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    id: 2,
    name: "Ankit Mehta",
    location: "Europe Tour",
    rating: 5,
    review: "A well-planned tour from start to finish. I didn't have to worry about a thing. Great support even during the trip!",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    id: 3,
    name: "Fatima Ali",
    location: "Maldives",
    rating: 5,
    review: "Smooth booking, great support, stress-free trip. Highly recommend Wings & Wheels!",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "Thailand",
    rating: 5,
    review: "Exceptional service and attention to detail. Made our honeymoon absolutely perfect!",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  }
];

const Home = () => {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  // Memoize expensive calculations
  const memoizedDestinations = useMemo(() => destinations, []);
  const memoizedServices = useMemo(() => services, []);
  const memoizedReasons = useMemo(() => whyChooseReasons, []);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 max-w-xl">
            <h1 
              className="text-2xl lg:text-3xl font-bold text-black leading-tight"
              style={{ fontFamily: '"Bodoni Bd BT", serif' }}
            >
              WE PROVIDE SEAMLESS SECURE, AND STRESS FREE TRAVEL EXPERIENCES TAILORED JUST FOR YOU.
            </h1>
            
            <div className="space-y-3">
              <p className="text-base font-semibold text-black">Your Next Adventure Starts Here</p>
              <p className="text-sm text-black leading-relaxed">
                Ready to explore? We're a team of passionate travelers dedicated to making your dream vacation a reality. Whether you're seeking a relaxing beach getaway, a thrilling mountain expedition, or an immersive cultural tour, we've got you covered.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
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
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-black text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-10 lg:mb-12">
            <h2 
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{ fontFamily: '"Bodoni Bd BT", serif' }}
            >
              OUR SERVICES
            </h2>
            <p className="text-sm lg:text-base text-gray-300 max-w-2xl leading-relaxed">
              We take care of everything you need for a smooth and enjoyable trip. From booking flights to helping with visas and more—we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {memoizedServices.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-black/30 hover:bg-black/50 transition-all duration-500 cursor-pointer h-[350px] lg:h-[400px] w-full max-w-[300px] mx-auto"
              >
                {/* Background Image */}
                <div className="absolute inset-0 group-hover:bg-black/40 transition-all duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 line-clamp-4 leading-relaxed">
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
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-4 lg:px-6 py-8 lg:py-10">
          
          {/* Header Section */}
          <div className="mb-8 lg:mb-10">
            <div className="max-w-4xl">
              <h2 
                className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-wide"
                style={{ fontFamily: '"Bodoni Bd BT", serif' }}
              >
                POPULAR DESTINATIONS
              </h2>
              <p className="text-sm lg:text-base text-white/90 leading-relaxed max-w-2xl">
                Discover our handpicked selection of dream destinations. From beach retreats to cultural expeditions, find your perfect getaway.
              </p>
            </div>
          </div>

          {/* Featured Destination Details */}
          <div className="mb-8 lg:mb-10">
            <div className="max-w-4xl">
              <h3 
                className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 tracking-wider leading-none transition-all duration-500"
                style={{ fontFamily: '"Bodoni Bd BT", serif' }}
              >
                {selectedDestination.name}
              </h3>
              
              <p className="text-xs lg:text-sm text-yellow-400 font-semibold mb-4 lg:mb-6 tracking-widest">
                {selectedDestination.country}
              </p>
              
              <p className="text-base lg:text-lg text-white/95 mb-6 lg:mb-8 leading-relaxed max-w-3xl">
                {selectedDestination.description}
              </p>

              {/* Destination Details Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-white">
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-xs tracking-wide">ATTRACTIONS</h4>
                  <p className="text-xs text-white/90 leading-relaxed">{selectedDestination.attractions}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-xs tracking-wide">ACTIVITIES</h4>
                  <p className="text-xs text-white/90 leading-relaxed">{selectedDestination.activities}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-xs tracking-wide">BEST TIME</h4>
                  <p className="text-xs text-white/90 leading-relaxed">{selectedDestination.bestTime}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-yellow-400 text-xs tracking-wide">CUISINE</h4>
                  <p className="text-xs text-white/90 leading-relaxed">{selectedDestination.cuisine}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Destinations Grid */}
          <div className="mt-auto">
            <div className="mb-6 lg:mb-8">
              <h4 className="text-lg lg:text-xl font-semibold text-white/90 tracking-wide">
                Explore Destinations
              </h4>
            </div>
            
            <div className="flex flex-wrap justify-start gap-4 lg:gap-6">
              {memoizedDestinations.map((destination) => (
                <div
                  key={destination.id}
                  onClick={() => handleDestinationClick(destination)}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-110 shadow-2xl ${
                    selectedDestination.id === destination.id 
                      ? 'ring-4 ring-yellow-400 scale-105' 
                      : 'hover:shadow-yellow-400/20'
                  }`}
                  style={{ 
                    width: '140px', 
                    height: '180px' 
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    selectedDestination.id === destination.id 
                      ? 'bg-black/30' 
                      : 'bg-black/50 group-hover:bg-black/40'
                  }`}></div>

                  {/* Content */}
                  <div className="relative z-10 p-3 h-full flex flex-col justify-end">
                    <div className="text-center">
                      <h5 className={`font-bold text-xs mb-1 tracking-wide transition-colors duration-300 ${
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
                      <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
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
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-left mb-12 lg:mb-16 max-w-4xl">
            <h2 
              className="text-2xl lg:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: '"Bodoni Bd BT", serif' }}
            >
              WHY CHOOSE TO BOOK WITH A TRAVEL AGENCY?
            </h2>
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
              With years of experience and a passion for travel, we make sure every trip is smooth, safe, and perfectly planned. Here's why thousands of travelers trust us with their dream vacations.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {memoizedReasons.map((reason) => (
              <div
                key={reason.id}
                className="group bg-white hover:bg-gray-50 p-7 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl border border-gray-100 flex flex-col h-full min-h-[320px]"
              >
                <div className="flex-grow space-y-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="mt-8">
                  <div className="w-8 h-8 rounded-full border border-gray-300 group-hover:border-gray-400 flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="w-full bg-black text-white py-8 lg:py-12 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto px-4 w-full">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h2 
              className="text-2xl lg:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: '"Bodoni Bd BT", serif' }}
            >
              WHAT OUR CUSTOMERS SAY
            </h2>
            <p className="text-sm lg:text-base text-gray-300 max-w-2xl leading-relaxed">
              Our customers are at the heart of everything we do. Here's what real travelers say about their experiences with Wings & Wheels.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
            {/* Left Side - Single Large Review */}
            <div className="lg:w-1/2 bg-white text-black p-8 rounded-2xl shadow-lg flex flex-col h-full">
              <div className="flex-grow">
                <Quote className="w-8 h-8 text-pink-500 mb-4" />
                <p className="text-base leading-relaxed mb-6">
                  {reviews[0].review}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={reviews[0].image}
                  alt={reviews[0].name}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-lg">{reviews[0].name}</h4>
                  <p className="text-sm text-gray-600">{reviews[0].location}</p>
                  <div className="flex space-x-1 mt-1">
                    {renderStars(reviews[0].rating)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Grid of 3 Reviews */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              {/* Top Large Review */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <Quote className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-sm leading-relaxed mb-4">
                    {reviews[1].review}
                  </p>
                </div>
                <div className="flex items-center space-x-3 mt-4">
                  <img
                    src={reviews[1].image}
                    alt={reviews[1].name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{reviews[1].name}</h4>
                    <p className="text-xs text-gray-600">{reviews[1].location}</p>
                    <div className="flex space-x-0.5 mt-0.5">
                      {renderStars(reviews[1].rating)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Two Small Reviews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Review 1 */}
                <div className="bg-white text-black p-4 rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-2">
                    <Quote className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed line-clamp-3">
                      {reviews[2].review}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 mt-3">
                    <img
                      src={reviews[2].image}
                      alt={reviews[2].name}
                      className="w-8 h-8 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-xs">{reviews[2].name}</h4>
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {renderStars(reviews[2].rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="bg-white text-black p-4 rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-2">
                    <Quote className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed line-clamp-3">
                      {reviews[3]?.review || reviews[0].review}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 mt-3">
                    <img
                      src={reviews[3]?.image || reviews[0].image}
                      alt={reviews[3]?.name || reviews[0].name}
                      className="w-8 h-8 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-xs">{reviews[3]?.name || reviews[0].name}</h4>
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {renderStars(reviews[3]?.rating || reviews[0].rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Go Section */}
      <section className="w-full bg-gray-50 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-bold text-black mb-4" style={{ fontFamily: '"Bodoni Bd BT", serif' }}>
                BEFORE YOU GO
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Essential things to review before heading to the airport—documents, packing list, travel plans, and online check-in for a smooth journey.
              </p>
              
              <div className="h-6"></div>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-base text-gray-900 mb-1">Finalize Your Documents</h3>
                  <p className="text-sm text-gray-500">Double-check your passport, visas, flight tickets, and hotel reservations. Make sure everything is in order and easily accessible.</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-base text-gray-900 mb-1">Pack Smart</h3>
                  <p className="text-sm text-gray-500">Create a packing list to ensure you have all the essentials. Don't forget your medications, chargers, and any travel adapters you might need.</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-base text-gray-900 mb-1">Confirm Your Travel Plan</h3>
                  <p className="text-sm text-gray-500">Review your itinerary one last time. Note down contact numbers for your accommodations, tour operators, and our agency in case you need assistance.</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-base text-gray-900 mb-1">Check-in Online</h3>
                  <p className="text-sm text-gray-500">Save time at the airport by checking in for your flight 24 hours in advance.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2 h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[600px]">
                <img
                  src="/src/assets/airticket.jpg"
                  alt="Air tickets and travel documents"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ready for Your Journey?</h3>
                  <p className="text-gray-200">Let us help you prepare for an unforgettable travel experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Dubai Image Section */}
      <section className="w-full h-screen relative">
        <div className="absolute inset-0">
          <img
            src="/src/assets/dubai.jpg"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Bodoni Bd BT", serif' }}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Tell us where you want to go, and we'll handle the rest—from flights and hotels to visas and tours. 
              Talk to our experts today and start planning a trip of a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300">
                CONTACT AGENT
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300">
                GET A FREE QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
            <Footer />
    </div>
  );
}

export default Home;