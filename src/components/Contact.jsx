import React from 'react'

function Contact() {
  return (
    <div
      id="contact"
      className="lg:h-full lg:w-full py-5"
    >
      <div className="flex md:items-center justify-center lg:w-full lg:h-full">
        <div className="grid grid-rows-2 gap-2 px-12">
          <div className="row-span-2">
            <div className="text-red-500">Contact</div>
            <div className="font-bold text-4xl">Get in touch with me</div>
          </div>
          <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 font-extrabold" /* for="username" */>Email: </label>
                <p><a href="mailto:lamothei@hotmail.com" class="text-red-500">lamothei@hotmail.com</a></p>
                {/* <input id="ContactName" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/> */}
            </div>

            {/*<div>
                <label class="text-gray-700" for="emailAddress">Email Address</label>
                 <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/> 
            </div>*/}

            <div>
                <label class="text-gray-700 font-extrabold" /* for="phone" */>Phone: </label>
                <a href="tel:705-297-2716" class="text-red-500">(705)-297-2716</a>
                <p class="text-gray-700">[Between Mon-Fri, 9AM-5PM EST]</p>
                {/* <input id="phone" type="phone" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/> */}
            </div>

            <div>
            <label class="text-gray-700 font-extrabold" /* for="username" */>Alt mail: </label>
                <p><a href="mailto:jlmamothei@gmail.com" class="text-red-500">jlmamothei@gmail.com</a></p>
                 {/*<label class="text-gray-700" for="business">Business</label>
                <input id="business" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>*/}
            </div> 
        </div>

        {/* <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button> 
        </div>*/}
    </form>
        </div>
      </div>
    </div>
  )
}

export default Contact