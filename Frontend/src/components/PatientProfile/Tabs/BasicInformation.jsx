import React from 'react';
import './tabs.css'

function BasicInformation() {
  return (
    <div className="mx-8 mb-10">
      <div className="text-stone-900 text-lg text-semibold shadow-lg rounded-lg overflow-hidden tabsBg">
        <div className="p-6 flex flex-wrap">
          <div className="w-full md:w-1/2 mb-4 md:pr-4 md:pl-8">
            <span className="font-semibold">Name:</span> Ryle
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pl-4">
            <span className="font-semibold">Date of Birth:</span> 21 February, 2001
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pr-4 md:pl-8">
            <span className="font-semibold">Age:</span> 23
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pl-4">
            <span className="font-semibold">Gender:</span> Male
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pr-4 md:pl-8">
            <span className="font-semibold">Contact:</span> +91 985629801
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pl-4">
            <span className="font-semibold">Address:</span> 123 Main Street, Cityville, State, Country
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pr-4 md:pl-8">
            <span className="font-semibold">Blood Type:</span> O+
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pl-4">
            <span className="font-semibold">Height:</span> 180 cm
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pr-4 md:pl-8">
            <span className="font-semibold">Weight:</span> 75 kg
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pl-4">
            <span className="font-semibold">Occupation:</span> Software Engineer
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pr-4 md:pl-8">
            <span className="font-semibold">Emergency Contact:</span> Jane Doe (+91 987654321)
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInformation;
