import React from 'react';
import './tabs.css'

function Insurance() {
  return (
    <div className="mx-8 mb-10">
      <div className="text-stone-900 text-lg text-semibold shadow-lg rounded-lg overflow-hidden tabsBg pl-8">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <span className="font-semibold">Insurance Provider:</span> ABC Insurance Company
            </div>
            <div className="mb-4">
              <span className="font-semibold">Policy Number:</span> 1234567890
            </div>
            <div className="mb-4">
              <span className="font-semibold">Policy Holder:</span> Ryle
            </div>
            <div className="mb-4">
              <span className="font-semibold">Date of Policy:</span> 01 January, 2023
            </div>
            <div className="mb-4">
              <span className="font-semibold">Coverage Type:</span> Health Insurance
            </div>
            <div className="mb-4">
              <span className="font-semibold">Coverage Period:</span> 01 January, 2023 - 31 December, 2023
            </div>
            <div className="mb-4">
              <span className="font-semibold">Monthly Premium:</span> $100
            </div>
            <div className="mb-4">
              <span className="font-semibold">Deductible:</span> $500
            </div>
            <div className="mb-4">
              <span className="font-semibold">Co-Payment:</span> $20
            </div>
            <div className="mb-4">
              <span className="font-semibold">In-Network Providers:</span> ABC Hospital, XYZ Clinic
            </div>
            <div className="mb-4">
              <span className="font-semibold">Out-of-Network Coverage:</span> 50%
            </div>
            <div className="mb-4">
              <span className="font-semibold">Emergency Coverage:</span> Worldwide
            </div>
            <div className="mb-4">
              <span className="font-semibold">Pre-Existing Conditions Coverage:</span> Yes
            </div>
            <div className="mb-4">
              <span className="font-semibold">Additional Riders:</span> Dental, Vision
            </div>
            <div className="mb-4">
              <span className="font-semibold">Insurance Agent:</span> John Smith (j.smith@abcinsurance.com)
            </div>
            <div className="mb-4">
              <span className="font-semibold">Customer Service:</span> 1-800-123-4567
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
