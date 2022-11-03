import React from 'react';

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="bg-gray-200 h-full w-full bg-no-repeat bg-cover bg-center"
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-rows-2 gap-2 px-12">
          <div className="row-span-2">
            <div className="text-red-500">Portfolio</div>
            <div className="font-bold text-4xl">Featured Work</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
