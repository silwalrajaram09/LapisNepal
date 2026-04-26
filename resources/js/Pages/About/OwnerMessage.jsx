import React from 'react'
import { Head } from '@inertiajs/react'

const OwnerMessage = () => {
  return (
    <>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Message from the Owner</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A personal message from the founder/owner goes here.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Owner's Name</h2>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  )
}

export default OwnerMessage