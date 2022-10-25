import React from 'react';

function About() {
  return (
    <div className="h-full w-full bg-no-repeat bg-cover bg-center">
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-rows-2 gap-2">
          <div>
            <div className="text-red-500">Biography</div>
            <div className="font-bold text-3xl">About me</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>where the photos will end up</div>
            <div>The Actual about me page</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
