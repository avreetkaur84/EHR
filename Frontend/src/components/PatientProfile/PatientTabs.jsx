import React, { useState } from "react";
import BasicInformation from "./Tabs/BasicInformation";
import MedicalHistory from "./Tabs/MedicalHistory";
import Insurance from "./Tabs/Insurance";
import Consents from "./Tabs/Consents";

function PatientTabs() {
  const [showBasicInformation, setShowBasicInformation] = useState(true);
  const [showMedicalHistory, setShowMedicalHistory] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);
  const [showConsents, setShowConsents] = useState(false);

  const basicInformationToggle = () => {
    setShowBasicInformation(!showBasicInformation);
  }

  const medicalHistoryToggle = () => {
    setShowMedicalHistory(!showMedicalHistory);
  }

  const insuranceToggle = () => {
    setShowInsurance(!showInsurance);
  }

  const consentsToggle = () => {
    setShowConsents(!showConsents);
  }


  return (
    <div className="">
      <div className="w-auto h-12 mx-8">
        <div className="flex justify-between text-center">

            <div onClick={basicInformationToggle} className="border-white border text-white text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-12 flex items-center justify-center rounded-tl-lg rounded-bl-lg transition-colors hover:bg-purple-800">
              Basic Information
            </div>

            <div onClick={medicalHistoryToggle} className="border-white border text-white text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-12 flex items-center justify-center transition-colors hover:bg-purple-800">
              Medical History
            </div>

            <div onClick={insuranceToggle} className="border-white border text-white text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-12 flex items-center justify-center transition-colors hover:bg-purple-800">
              Insurance
            </div>

            <div className="border-white border text-white text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-12 flex items-center justify-center transition-colors hover:bg-purple-800">
              Family History
            </div>

            <div onClick={consentsToggle} className="border-white border text-white text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-12 flex items-center justify-center rounded-tr-lg rounded-br-lg transition-colors hover:bg-purple-800">
              Consents
            </div>

        </div>
      </div>

      <div className="">
        {showBasicInformation && <BasicInformation/>}
        {showMedicalHistory && <MedicalHistory/>}
        {showInsurance && <Insurance/>}
        {showConsents && <Consents/>}
      </div>
    </div>
  );
}

export default PatientTabs;
