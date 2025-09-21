import React from 'react';

interface HandcraftedArtisanSectionProps {
  dictionary: any;
}

const HandcraftedArtisanSection: React.FC<HandcraftedArtisanSectionProps> = ({ dictionary }) => {
  const { handcrafted_artisan } = dictionary;

  return (
    <section id="handcrafted-artisan" className="py-20 section-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            <span className="text-gradient">{handcrafted_artisan.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {handcrafted_artisan.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {handcrafted_artisan.services.map((service: any, index: number) => (
            <div key={index} className="night-card service-card glow-effect">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {service.materials && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-3">
                      Materials:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((material: string, materialIndex: number) => (
                        <span key={materialIndex} className="px-3 py-1 bg-orange-900/30 text-orange-300 text-sm rounded-full border border-orange-500/30">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.types && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-3">
                      Available Types:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.types.map((type: string, typeIndex: number) => (
                        <span key={typeIndex} className="px-3 py-1 bg-amber-900/30 text-amber-300 text-sm rounded-full border border-amber-500/30">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-3">
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <svg className="w-4 h-4 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.includes && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {service.includes.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="text-sm text-gray-300 flex items-center">
                          <svg className="w-4 h-4 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="w-full night-button glow-effect">
                  Custom Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandcraftedArtisanSection;