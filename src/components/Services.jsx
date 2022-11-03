import React from 'react';
import { UilBrushAlt, UilJavaScript } from '@iconscout/react-unicons';

function Services() {
  return (
    <div
      id="services"
      className="h-full w-full bg-no-repeat bg-cover bg-center"
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
                  Web development
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
                  Visual design
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Through the self practices of the visual arts and programs,
                  understanding concepts of design and development.
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">Image</div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">text1</p>
                <p className="text-base text-gray-400 font-normal">text2</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">Image</div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">text1</p>
                <p className="text-base text-gray-400 font-normal">text2</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">Image</div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">text1</p>
                <p className="text-base text-gray-400 font-normal">text2</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">Image</div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">text1</p>
                <p className="text-base text-gray-400 font-normal">text2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
