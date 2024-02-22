// import React from "react";
// import HospitalImage from "./images/hospitalImg.jpg";

// const Hospitals = () => {
//   return (
//     <section className="overflow-hidden hospital">
//       <div className="flex justify-between">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-7">

//           <div className="bg-white rounded-lg shadow-md mt-10">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">HeathWell Hospital</h1>
//           </div>


//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span> Mumbai, Maharashtra
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span> General Medicine, Surgery, Obstetrics & Gynecology
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span> Dr. Anika Sharma (General Medicine), Dr. Rajeev Kapoor (Surgery), Dr. Nandini Desai (Obstetrics & Gynecology)
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span> 2010
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md mt-10">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">LifeCare Medical Center</h1>
//           </div>


//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span> Delhi, National Capital Region
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span> : Cardiology, Orthopedics, Pediatrics
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span> Dr. Sameer Verma (Cardiology), Dr. Meera Kapoor (Orthopedics), Dr. Ananya Sinha (Pediatrics)
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span>  2008
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md mt-10">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">SereneHeart Hospital </h1>
//           </div>


//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span>  Bangalore, Karnataka
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span> : Cardiac Surgery, Cardiology, Neurology
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span>: Dr. Vikram Singh (Cardiac Surgery), Dr. Sneha Reddy (Cardiology) 
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span> 2012
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md mt-10">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">TechHealth Centre </h1>
//           </div>


//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span> : Hyderabad, Telangana
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span> : Digital Health, Telemedicine, Medical Research
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span>  Dr. Neha Reddy (Digital Health), Dr. Karthik Patel (Telemedicine), Dr. Aisha Khan (Medical Research)
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span> 2015
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md mt-10">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">GreenLife Wellness Center</h1>
//           </div>


//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span> Chennai, Tamil Nadu
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span> Integrative Medicine, Nutrition, Mental Health
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span> Dr. Priya Rajan (Integrative Medicine), Dr. Siddharth Menon (Nutrition), Dr. Ritu Kapoor (Mental Health)
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span> 2011
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md mt-10">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">Sunrise Hospital & Research Institute </h1>
//           </div>

//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span>  Kolkata, West Bengal
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span>  Oncology, Radiology, Hematology
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span> Dr. Alok Sen (Oncology), Dr. Tanvi Roy (Radiology), Dr. Rahul Sharma (Hematology)
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span> 2009
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md mt-10 mb-20">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">EverGreen Maternity Center</h1>
//           </div>


//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span>  Jaipur, Rajasthan
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span>  Maternal-Fetal Medicine, Neonatology, Obstetrics
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span> : Dr. Anjali Gupta (Maternal-Fetal Medicine), Dr. Sanjay Mehta (Neonatology), Dr. Preeti Singh (Obstetrics)
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span> 2013
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md mt-10 mb-20">
//           <div className="text-center text-3xl font-semibold my-4">
//             <h1 className="text-purple-900">SmartCare General Hospital </h1>
//           </div>


//             <div className="flex items-center">
//               <img
//                 alt="Hospital Image"
//                 className="h-60 w-55 ml-5 rounded object-cover lg:h-50 lg:w-1/2"
//                 src={HospitalImage}
//               />

//               <div className="mt-6 w-45 mx-1 text-justify lg:mt-0 lg:w-45 lg:pl-10">
//                 <div className="mb-3 mr-8">
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Location:</span> Pune, Maharashtra
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Speciality:</span>  Emergency Medicine, Internal Medicine, Dermatology
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Related Doctors:</span> Dr. Arvind Deshmukh (Emergency Medicine), Dr. Meenal Joshi (Internal Medicine), Dr. Neha Kulkarni (Dermatology)
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-bold">Operational Since:</span> 2014
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-7">
//               <button
//                 type="button"
//                 className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800 mb-4"
//               >
//                 Know More
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hospitals;

import React, { useState, useEffect }  from 'react';
import Hospital from './Hospital';
import { hospitalData } from "../API/hospital.api"

const HospitalsPage = () => {
    const [hospitals, setHospitals] = useState([]);
  
    useEffect(() => {
        setHospitals(hospitalData);
      }, []); 

  return (
    <div className="hospitals-page bg-white flex justify-center">
        <div className="grid grid-cols-3 gap-4">
            {hospitals.map((hospital, index) => (
            <Hospital key={index} hospital={hospital} />
            ))}
        </div>
    </div>

  );
};

export default HospitalsPage;
