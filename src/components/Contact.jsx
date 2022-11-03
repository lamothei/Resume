import React from 'react'

function Contact() {
  return (
    <div
      id="contact"
      className="h-full w-full bg-no-repeat bg-cover bg-center"
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-rows-2 gap-2 px-12">
          <div className="row-span-2">
            <div className="text-red-500">Contact</div>
            <div className="font-bold text-4xl">Get in touch</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact