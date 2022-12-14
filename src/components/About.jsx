import React from 'react';

function About() {
  return (
    <div id="about" className="bg-gray-200 lg:h-full lg:w-full py-5">
      <div className="flex md:items-center justify-center lg:w-full lg:h-full">
        <div className="grid grid-rows-2 gap-2 md:w-1/2 p-3">
          <div className="row-span-2">
            <div className="text-red-500">Biography</div>
            <div className="font-bold text-4xl">About me</div>
          </div>
          <div className="grid gap-2 grid-cols-[auto_minmax(0,_1fr)]">
            <img
              className="w-32 lg:w-52 rounded-xl"
              src="img/selfPortrait.jpg"
              alt="avatar"
            />
            <div>
              <div>
                <p className="font-bold text-2xl">
                  Hey I'm
                  <span className="text-red-500"> Ian Lamothe </span>a junior
                  developer and designer
                </p>
                <p className="">
                  Being a graduate in computer programing and analytics, and
                  further studies out of school always continuing my programing
                  education. Further working as a field service technician for
                  POS devices, ABM machines, security systems, and camera setup.
                  Mixing up physical and developer skills to broaden and have
                  greater understandings of different perspectives, on the
                  field, and behind a desk.
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-3">
            <a
              href="https://github.com/lamothei"
              target="_blank"
              rel="noreferrer"
            >
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2">
                Check out my <span className="text-orange-500">Github!</span>
              </button>
            </a>
            <a href="PDF/Ian_resume.pdf">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Download Resume!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
