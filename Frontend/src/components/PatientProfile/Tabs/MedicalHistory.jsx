import React from 'react';
import './tabs.css'

function MedicalHistory() {
  return (
    <div className="mx-8 mb-10">
      <div className="text-stone-900 text-lg text-semibold shadow-lg rounded-lg overflow-hidden tabsBg">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Blood Pressure:</span> 140/90 mmHg (Hypertension)
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Heart Rate:</span> 80 bpm (Tachycardia)
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Body Temperature:</span> 38°C (100.4°F) (Fever)
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Height:</span> 180 cm
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Weight:</span> 75 kg
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">BMI:</span> 23.1 kg/m² (Normal)
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Major Surgeries:</span> Appendectomy (2018)
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Hospitalizations:</span> None
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Allergies:</span> Penicillin
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Medications:</span> Lisinopril (for hypertension)
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Chronic Conditions:</span> Hypertension, Seasonal Allergies
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Vaccination History:</span> Up to date
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Family Medical History:</span> Family history of heart disease
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Current Symptoms:</span> None
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Last Checkup:</span> 15 January 2024
            </div>
            <div className="mb-4 md:pl-12">
              <span className="font-semibold">Next Checkup:</span> 15 July 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalHistory;
