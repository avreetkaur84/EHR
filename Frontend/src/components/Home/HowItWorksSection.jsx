import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Learn how to use NexusHealth Hub in just a few simple steps.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex-shrink-0 mr-6">
              <svg
                className="h-12 w-12 text-purple-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0-4a1 1 0 100-2h8a1 1 0 100 2H5zm10 8a1 1 0 00-1 1v2.586l-2.707-2.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L14 15.586V13a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Step 1: Register</h3>
              <p className="mt-2 text-base text-gray-600">Create your account on NexusHealth Hub by providing basic information.</p>
            </div>
          </div>

          <div className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex-shrink-0 mr-6">
              <svg
                className="h-12 w-12 text-purple-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.293 6.293a1 1 0 00-1.414 0L11 7.586V5a1 1 0 00-2 0v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 000-1.414zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0-4a1 1 0 100-2h8a1 1 0 100 2H5zm10 8a1 1 0 00-1 1v2.586l-2.707-2.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L14 15.586V13a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Step 2: Connect</h3>
              <p className="mt-2 text-base text-gray-600">Connect with hospitals, NGOs, and financial organizations to access their services and support.</p>
            </div>
          </div>

          <div className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex-shrink-0 mr-6">
              <svg
                className="h-12 w-12 text-purple-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 00-7.465 5.062 1 1 0 01-1.834-.792A10 10 0 1110 18v-2a1 1 0 112 0v2a10 10 0 01-8.7-5.062A8 8 0 0010 2zm0 5a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1zm0 6a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Step 3: Explore</h3>
              <p className="mt-2 text-base text-gray-600">Explore the features of NexusHealth Hub, including AI integration and secure data sharing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
