import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Testimonials & Case Studies</h2>
          <p className="mt-4 text-lg text-gray-600">See what our users have to say and explore real-world success stories.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-lg font-medium text-gray-900 mb-2">
              Testimonial from Patient
            </div>
            <p className="text-base text-gray-600">
              "NexusHealth Hub has simplified my healthcare journey. I can easily access my medical records from different hospitals, making it convenient for me and my doctors."
            </p>
            <div className="mt-4 text-sm font-medium text-gray-500">
              - John Doe, Patient
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-lg font-medium text-gray-900 mb-2">
              Case Study: Hospital Collaboration
            </div>
            <p className="text-base text-gray-600">
              "Hospital XYZ implemented NexusHealth Hub and saw a 30% improvement in data sharing efficiency among departments. This led to faster diagnoses and better patient outcomes."
            </p>
            <div className="mt-4 text-sm font-medium text-gray-500">
              - Hospital XYZ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
