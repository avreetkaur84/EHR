import React from "react";

const FeaturesAndBenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Features and Benefits
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how NexusHealth Hub revolutionizes healthcare connectivity
            to provide superior patient care and support.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex flex-col items-center p-6">
              <div className="flex-shrink-0">
                <svg
                  className="h-12 w-12 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm10-8a1 1 0 00-2 0v4a1 1 0 102 0V2zM7 4a1 1 0 112 0v5a1 1 0 11-2 0V4zm9 9a1 1 0 00-2 0v4a1 1 0 102 0v-4zM9 9a1 1 0 112 0v5a1 1 0 11-2 0V9zm1 5a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Interoperability
              </h3>
              <p className="mt-4 text-base text-gray-600 text-justify">
                Connect multiple hospitals, NGOs, and financial organizations
                seamlessly for enhanced collaboration and secure data sharing.
              </p>
            </div>
            <div className="flex items-center justify-center bg-purple-600 py-3">
              <button className="text-white font-semibold py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-purple-700 transition duration-300">
                Know More
              </button>
            </div>
          </div>

          <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex flex-col items-center p-6">
              <div className="flex-shrink-0">
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
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                AI Integration
              </h3>
              <p className="mt-4 text-base text-gray-600 text-justify">
                Utilize advanced AI models to analyze patient health data, make
                predictions, and provide personalized insights for better
                decision-making.
              </p>
            </div>
            <div className="flex items-center justify-center bg-purple-600 py-3">
              <button className="text-white font-semibold py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-purple-700 transition duration-300">
                Know More
              </button>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex flex-col items-center p-6">
              <div className="flex-shrink-0">
                <svg
                  className="h-12 w-12 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm-1-8a1 1 0 112 0v4a1 1 0 11-2 0V8zm0 6a1 1 0 110-2 1 1 0 010 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Secure Data Sharing
              </h3>
              <p className="mt-4 text-base text-gray-600 text-justify">
                Ensure privacy and confidentiality with secure data sharing
                protocols, allowing authorized parties to access and exchange
                patient information with confidence.
              </p>
            </div>
            <div className="flex items-center justify-center bg-purple-600 py-3">
              <button className="text-white font-semibold py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-purple-700 transition duration-300">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndBenefitsSection;