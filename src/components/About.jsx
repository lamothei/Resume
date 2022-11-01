import React from 'react';
import image from '../img/selfPortrait.jpg';

function About() {
  return (
    <div id='about' className="h-full w-full bg-no-repeat bg-cover bg-center">
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-rows-2 gap-2">
          <div className="row-span-2">
            <div className="text-red-500">Biography</div>
            <div className="font-bold text-4xl">About me</div>
          </div>
          <div className="grid gap-2 grid-cols-[auto_minmax(0,_1fr)]">
            <img className="w-32 md:w-64 lg:w-72 rounded-xl" src={image} alt="avatar" />
            <div>
              <div className="font-bold text-2xl">
                <p>
                  Hey I'm
                  <span className="text-red-500"> Ian Lamothe </span>
                </p>
                <p>A junior developer and designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
