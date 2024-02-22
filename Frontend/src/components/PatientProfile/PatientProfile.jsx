import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { patientData } from '../API/patient.api';

const PatientProfile = () => {
  const { username } = useParams();
  console.log(username); 
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchedPatient = patientData.find(patient => patient.username === username);
    setPatient(fetchedPatient);
  }, [username]);

  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <h2 className="text-xl font-bold mb-2">Patient Profile</h2>
          {patient ? (
            <div>
              <p><strong>Name:</strong> {patient.patientName}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Location:</strong> {patient.location.city}, {patient.location.state}</p>
              <p><strong>Disease:</strong> {patient.disease[0].diseaseName}</p>
              <p><strong>Income:</strong> ${patient.income}</p>
              <p><strong>Contact:</strong> {patient.contact.phoneNo}, {patient.contact.email}</p>
              <p><strong>Gender:</strong> {patient.Gender}</p>
              <p><strong>Occupation:</strong> {patient.occupation}</p>
              <p><strong>Insurance:</strong> Coverage Limit - ${patient.insurance.coverage_limit}, Remaining Balance - ${patient.insurance.remaining_balance}, Coverage Percentage - {patient.insurance.coverage_percentage}%</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
