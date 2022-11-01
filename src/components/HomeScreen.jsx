import React from 'react'

function HomeScreen() {
  return (
        <div id='home' className='bg-bridge h-full w-full bg-no-repeat bg-cover bg-center'>
            <div className='w-full h-full bg-opacity-50 bg-gray-700'>
                <div className='flex items-center justify-center w-full h-full'>
                    <div className='flex flex-row justify-between'>
                    <p className='text-5xl font-bold pr-3'>Ian</p>
                    <p className='text-5xl font-bold text-red-400'>Lamothe</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeScreen