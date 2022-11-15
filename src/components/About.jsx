import React from 'react';
import image from '../img/selfPortrait.jpg';

function About() {
  return (
    <div id="about" className="bg-gray-200 h-full w-full bg-no-repeat bg-cover bg-center">
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-rows-2 gap-2 w-1/2">
          <div className="row-span-2">
            <div className="text-red-500">Biography</div>
            <div className="font-bold text-4xl">About me</div>
          </div>
          <div className="grid gap-2 grid-cols-[auto_minmax(0,_1fr)]">
            <img
              className="w-32 md:w-64 lg:w-72 rounded-xl"
              src={image}
              alt="avatar"
            />
            <div>
              <div>
                <p className="font-bold text-2xl">
                  Hey I'm
                  <span className="text-red-500"> Ian Lamothe </span>a junior
                  developer and designer
                </p>
                <p className=''>
                  Being a graduate in computer programing and analytics, and further studies out of school
                   always continuing my programing education. Further working as a field service technician for POS devices,
                   ABM machines, security systems, and camera setup. Mixing up physical and developer skills
                   to broaden and have greater understandings of different perspectives, on the field, and behind a desk. 
                </p>
              </div>
              <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Download Resume!</button>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
