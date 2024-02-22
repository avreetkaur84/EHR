import React from 'react';
import './tabs.css'

function Consents() {
  return (
    <div className="mx-8 mb-10">
      <div className="text-stone-900 text-lg text-semibold shadow-lg rounded-lg overflow-hidden tabsBg pl-10">
        <div className="p-6">
          <div className="mb-4">
            <span className="font-semibold">Consent for Treatment:</span> Given
          </div>
          <div className="mb-4">
            <span className="font-semibold">Consent for Medical Records Access:</span> Given
          </div>
          <div className="mb-4">
            <span className="font-semibold">Consent for Communication:</span> Given
          </div>
          <div className="mb-4">
            <span className="font-semibold">Consent for Research Participation:</span> Not Given
          </div>
          <div className="mb-4">
            <span className="font-semibold">Consent for Photos/Videos Usage:</span> Given for Medical Purposes Only
          </div>
          <div className="mb-4">
            <span className="font-semibold">Consent for Financial Information Sharing:</span> Not Given
          </div>
          <div className="mb-4">
            <span className="font-semibold">Consent for Third-party Consultation:</span> Not Given
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consents;
