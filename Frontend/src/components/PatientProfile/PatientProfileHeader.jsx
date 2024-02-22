import React from "react";
import ProfileImage from "./Images/user1.jpg";
import "./PatientProfile.css"

const PatientProfileHeader = () => {
  return (
    <div className="w-3/12 h-auto mx-auto my-16">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden patient hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="mt-7 mb-3 ">
          <div className="flex items-center justify-center">
            <img
              className="rounded-full h-24 w-24"
              src={ProfileImage}
              alt="X"
            />
          </div>
        </div>

        <div className="flex flex-col w-52 mx-auto px-2 my-8 text-stone-900 font-bold">
          <div className="mb-3">
            <span className="font-semibold">Name:</span> Ryle
          </div>
          <div className="mb-3">
            <span className="font-semibold">DOB:</span> 21 February, 2001
          </div>
          <div className="mb-3">
            <span className="font-semibold">Age:</span> 23
          </div>
          <div className="mb-3">
            <span className="font-semibold">Gender:</span> Male
          </div>
          <div>
            <span className="font-semibold">Contact:</span> +91 985629801
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileHeader;
