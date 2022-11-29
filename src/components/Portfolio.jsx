import React from 'react';

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="bg-gray-200 lg:h-full lg:w-full py-5"
    >
      <div className="flex md:items-center justify-center lg:w-full lg:h-full">
        <div className="grid grid-rows-2 gap-2 px-12">
          <div className="row-span-2">
            <div className="text-red-500">Portfolio</div>
            <div className="font-bold text-4xl">Featured Work</div>
          </div>
          <div class="container px-6 py-8 mx-auto">
            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src="/img/programing.jpg"
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-gray-800">
                    Web Development
                  </h3>
                  <span class="mt-1 font-medium text-gray-600">
                    place holder photo, for me to show myself coding
                  </span>
                </div>
              </div>

              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src="/img/securityTech.jpg"
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-gray-800">
                    Security technician
                  </h3>
                  <span class="mt-1 font-medium text-gray-600">
                    place holder photo, for me to show myself doing security
                    work
                  </span>
                </div>
              </div>

              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src="/img/serviceTech.jpg"
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-gray-800">IT services</h3>
                  <span class="mt-1 font-medium text-gray-600">
                    place holder photo, for me to show myself doing IT work
                  </span>
                </div>
              </div>

              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src="/img/woodWorking.jpg"
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-gray-800">
                    Wood working
                  </h3>
                  <span class="mt-1 font-medium text-gray-600">
                    place holder photo, for me to show myself doing wood working
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
