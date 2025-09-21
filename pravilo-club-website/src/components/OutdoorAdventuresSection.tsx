import React from 'react';

interface OutdoorAdventuresSectionProps {
  dictionary: any;
}

const OutdoorAdventuresSection: React.FC<OutdoorAdventuresSectionProps> = ({ dictionary }) => {
  const { outdoor_adventures } = dictionary;

  return (
    <section id="outdoor-adventures" className="py-20 section-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            <span className="text-gradient">{outdoor_adventures.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {outdoor_adventures.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outdoor_adventures.services.map((service: any, index: number) => (
            <div key={index} className="night-card service-card glow-effect">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <span className="text-sm text-blue-400 font-medium bg-blue-900/30 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.includes.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-sm text-gray-300 flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full night-button glow-effect">
                  Book Adventure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutdoorAdventuresSection;