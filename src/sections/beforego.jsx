import React from 'react'

const beforego = () => {
  return (
    <div>
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

    </div>
  )
}

export default beforego
