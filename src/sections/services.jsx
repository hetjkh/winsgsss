import React, { useMemo, memo } from 'react'
// Import local images
// Images from public/assets directory
const image1 = '/assets/1.jpg';
const image2 = '/assets/2.jpg';
const image3 = '/assets/3.jpg';
const image4 = '/assets/4.jpg';
const image5 = '/assets/5.jpg';
const image6 = '/assets/6.jpg';
const image7 = '/assets/7.jpg';
const image8 = '/assets/8.jpg';
const image9 = '/assets/9.jpg';

import { ArrowUpRight, Star, Quote } from 'lucide-react';


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



const ServiceCard = memo(({ service }) => (
  <div
    className="group relative overflow-hidden rounded-2xl bg-black/30 hover:bg-black/50 transition-all duration-300 cursor-pointer h-[350px] lg:h-[400px] w-full max-w-[300px] mx-auto will-change-transform"
  >
    {/* Background Image */}
    <div className="absolute inset-0 group-hover:bg-black/40 transition-all duration-300">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        decoding="async"
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
));

const service = () => {
    const memoizedServices = useMemo(() => services, []);
  return (
    <div>
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
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default service
