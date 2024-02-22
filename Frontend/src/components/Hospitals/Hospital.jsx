import React from 'react';

// Hospital component with Tailwind CSS styling
const Hospital = ({ hospital }) => {
  const { hospitalName, location, speciality, doctors, operationSince, contact } = hospital;

  return (
    <div className="m-8 w-full">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 mb-4">
        <div className="px-10 py-8">
            <div className="font-bold text-xl mb-2 text-center">{hospitalName}</div>
            <div>
            <ul className="text-gray-700">
                {speciality.map((spec, index) => (
                <li key={index}>
                    <div className="">
                        <h3 className="text-md font-bold mb-1">Speciality : {spec.diseaseName} </h3>
                        <h3 className="text-md font-bold mb-1">Treatement Time : </h3>
                    </div>
                    <div className="ml-10">
                        <div className="">
                            Minor: {spec.diseaseSeverity.minor.time_period}
                        </div> 
                        <div className="">
                            Moderate: {spec.diseaseSeverity.moderate.time_period}
                        </div>
                        <div className="">
                            Major: {spec.diseaseSeverity.major.time_period}
                        </div>
                        <div className="">
                            Extreme: {spec.diseaseSeverity.extreme.time_period}
                        </div>
                    </div>
                </li>
                ))}
            </ul>
            </div>

            <div>
            <h3 className="text-lg font-bold mt-2 mb-1">Doctors:</h3>
            <ul className="text-gray-700">
                <div className="ml-10 mb-3">
                    {doctors.map((doctor, index) => (
                    <li key={index}>{doctor.name} - {doctor.doctorSpeciality}</li>
                    ))}
                </div>
            </ul>
            </div>
            <p className="text-black text-base mb-2">Location: {location.city}, {location.state}</p>
            <p className="text-black text-base mb-2">Operation Since: {operationSince}</p>
            <p className="text-black text-base mt-2">Contact: {contact.phoneNo}, {contact.email}</p>
        </div>
        </div>
    </div>
  );
};

export default Hospital;
