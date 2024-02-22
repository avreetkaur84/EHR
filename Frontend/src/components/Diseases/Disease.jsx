import React from 'react';

const Disease = ({ disease }) => {
  const { diseaseName, diseaseSeverity } = disease;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{diseaseName}</div>
        <div>
          <h3 className="text-lg font-bold mb-1">Disease Severity:</h3>
          <ul className="text-gray-700">
            <li>Minor - Time Period: {diseaseSeverity.minor.time_period} days, Approximate Cost: {diseaseSeverity.minor.approximate_cost}</li>
            <li>Moderate - Time Period: {diseaseSeverity.moderate.time_period} days, Approximate Cost: {diseaseSeverity.moderate.approximate_cost}</li>
            <li>Major - Time Period: {diseaseSeverity.major.time_period} days, Approximate Cost: {diseaseSeverity.major.approximate_cost}</li>
            <li>Extreme - Time Period: {diseaseSeverity.extreme.time_period} days, Approximate Cost: {diseaseSeverity.extreme.approximate_cost}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Disease;
