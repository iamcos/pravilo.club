import React from 'react';

interface WellnessTherapiesSectionProps {
  dictionary: any;
}

const WellnessTherapiesSection: React.FC<WellnessTherapiesSectionProps> = ({ dictionary }) => {
  const { wellness_therapies } = dictionary;

  return (
    <section id="wellness-therapies" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {wellness_therapies.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {wellness_therapies.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wellness_therapies.services.map((service: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      Techniques:
                    </h4>
                    <ul className="space-y-1">
                      {service.techniques.map((technique: string, techniqueIndex: number) => (
                        <li key={techniqueIndex} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit: string, benefitIndex: number) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-colors duration-200">
                  Book Therapy Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessTherapiesSection;