import React from 'react'
import { UilEstate, UilUser,UilBox, UilAt, UilBag } from '@iconscout/react-unicons'

function Sidebar() {
  return (
    <div className="xl:flex lg:flex md:flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 hidden">

    <div className="lg:flex flex-col items-center mt-6 -mx-2 md:hidden">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src="/img/selfPortrait.jpg" alt="avatar" />
        <h4 className="mx-2 mt-2 font-medium text-gray-200 hover:underline">Ian Lamothe</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-400 hover:underline"><a href="mailto:jlmamothei@gmail.com">jlmamothei@gmail.com</a></p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <a className="flex items-center px-4 py-2 bg-gray-800 text-gray-200" href="#home">
                <UilEstate className="w-5 h-5"/>
                <span className="mx-4 font-medium">Home</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform text-gray-400 hover:bg-gray-700 hover:text-gray-200" href="#about">
                <UilUser className="w-5 h-5"/>
                <span className="mx-4 font-medium">About</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform text-gray-400 hover:bg-gray-700 hover:text-gray-200" href="#services">
                <UilBox  className="w-5 h-5"/>
                <span className="mx-4 font-medium">Services</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform text-gray-400 hover:bg-gray-700 hover:text-gray-200" href="#portfolio">
               <UilBag  className="w-5 h-5"/>
                <span className="mx-4 font-medium">Portfolio</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform text-gray-400 hover:bg-gray-700 hover:text-gray-200" href="#contact">
               <UilAt  className="w-5 h-5"/>
                <span className="mx-4 font-medium">Contact</span>
            </a>
        </nav>
    </div>
</div>
  )
}

export default Sidebar