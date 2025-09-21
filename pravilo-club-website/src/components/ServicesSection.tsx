import { Dictionary } from '@/lib/i18n';

type ServicesSectionProps = {
  dictionary: Dictionary;
};

export default function ServicesSection({ dictionary }: ServicesSectionProps) {
  return (
    <section id="services-pricing" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dictionary.services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="text-left mb-6">
                {service.whats_included.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition duration-300">
                {service.call_to_action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
