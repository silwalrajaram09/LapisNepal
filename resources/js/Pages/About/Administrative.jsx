import React from 'react'
import { Head } from '@inertiajs/react'

const Administrative = () => {
  return (
    <>
      {/* <Head title="Administrative Structure" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Administrative Structure</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Organizational Chart</h2>
          {/* You can add an actual organizational chart image or component here */}
          <div className="bg-gray-100 p-8 rounded-lg text-center mb-8">
            <p className="text-gray-500">Organizational Chart Placeholder</p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Board of Directors</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Chairman:</strong> Name Surname</li>
            <li><strong>Vice Chairman:</strong> Name Surname</li>
            <li><strong>Secretary:</strong> Name Surname</li>
            <li><strong>Treasurer:</strong> Name Surname</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Management Team</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Director:</strong> Name Surname</li>
            <li><strong>Academic Director:</strong> Name Surname</li>
            <li><strong>Operations Manager:</strong> Name Surname</li>
            <li><strong>Student Affairs:</strong> Name Surname</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Academic Departments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Japanese Language Department:</strong> Head of Department</li>
            <li><strong>Technical Training Department:</strong> Head of Department</li>
            <li><strong>Internship Programs:</strong> Program Coordinator</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Administrative