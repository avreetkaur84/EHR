import React, { useState, useEffect } from 'react'
import {diseaseData} from "../API/disease.api"
import Disease from './Disease';

const DiseasePage = () => {
    const [diseases, setDiseases] = useState([]);
  
    useEffect(() => {
      setDiseases(diseaseData)
    }, []);
  
    return (
      <div className="bg-white">
      <div className="diseases-page flex justify-around">
        <div className="grid grid-cols-2 gap-4">
          {diseases.map((disease, index) => (
            <Disease key={index} disease={disease} />
          ))}
        </div>
      </div>
      </div>
    );
  };

export default DiseasePage