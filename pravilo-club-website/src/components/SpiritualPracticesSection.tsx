import React from 'react';

interface SpiritualPracticesSectionProps {
  dictionary: any;
}

const SpiritualPracticesSection: React.FC<SpiritualPracticesSectionProps> = ({ dictionary }) => {
  const { spiritual_practices } = dictionary;

  return (
    <section id="spiritual-practices" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {spiritual_practices.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {spiritual_practices.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spiritual_practices.services.map((service: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                    Elements:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.elements.map((element: string, elementIndex: number) => (
                      <span key={elementIndex} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {element}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                    Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit: string, benefitIndex: number) => (
                      <span key={benefitIndex} className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Spiritual Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Each ceremony is carefully designed to provide a safe, meaningful experience that honors ancient traditions while serving modern spiritual seekers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-purple-500 text-purple-500 py-3 px-8 rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-200">
                Learn About Ceremonies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualPracticesSection;