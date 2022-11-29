import React from 'react';
import {
  UilBrushAlt,
  UilJavaScript,
  UilWrench,
  UilScrew,
  UilDiceSix,
  UilMegaphone,
} from '@iconscout/react-unicons';

function Services() {
  return (
    <div
      id="services"
      className="h-full w-full"
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-rows-2 gap-2 px-12">
          <div className="row-span-2">
            <div className="text-red-500">Services</div>
            <div className="font-bold text-4xl">Quality Services</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <UilJavaScript className="mb-8" />
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Web Development
                </p>
                <p className="text-base text-gray-400 font-normal">
                  With understandings in many web based developments through
                  college, and much deeper knowledge in Javascript based web
                  design.
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <UilBrushAlt className="mb-8" />
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Visual Design
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Through the self practices of the visual arts and programs,
                  understanding concepts of fundamental design and development.
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <UilWrench className="mb-8" />
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  IT Technician
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Experience in various POS systems, AMBs, specialized
                  equipment, with a dash of server equipment. knowing the
                  fundamentals is always handy.
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <UilScrew className="mb-8" />
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Wood Working
                </p>
                <p className="text-base text-gray-400 font-normal">
                  being self taught and trained in wood working, acquiring new
                  tools and skills as I go along.
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <UilDiceSix className="mb-8" />
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Game Master
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Odd you might say? true, but involving research, organization,
                  improvisation, social, and leadership skills to name a few,
                  are a great part to being a table top GM.
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <UilMegaphone className="mb-8" />
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Social skills
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Having great social skills was a huge deal in my previous work
                  environments, needing to talking to business owners, home
                  owners, and managers the like. keeping good notes, and never
                  being afraid to ask questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
