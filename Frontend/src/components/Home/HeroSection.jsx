import React from "react";
import '../Home/Home.css';

const HeroSection = () => {
  return (
    <div
      className="relative h-80 bg-cover bg-center flex flex-col items-center justify-center text-white heroSection"
    //   style={{
    //     backgroundImage: `url(https://www.tuvsud.com/-/media/regions/sg/images/resource-centre/webinar/ss_1565456593_iot-intro-banner.jpg?pid=cbb18a07-d20b-4c28-9b33-c0b60f6f6c16)`,
    //   }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold leading-tight mb-4">
        Revolutionizing Healthcare Connectivity
        </h1>
        <p className="text-lg font-semibold">
        Interoperability Redefined: Bridging Hospitals, NGOs, and Financial Institutions for Seamless Patient Care and Support
        </p>
      </div>
      <div className="mt-8">
        <button className="bg-purple-800 text-white font-semibold py-3 px-8 rounded opacity-95 rounded bg-purple-700 text-white font-semibold hover:bg-gray-200 hover:text-black transition-all duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
