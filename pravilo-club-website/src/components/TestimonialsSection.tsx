import { Dictionary } from '@/lib/i18n';

type TestimonialsSectionProps = {
  dictionary: Dictionary;
};

export default function TestimonialsSection({ dictionary }: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Testimonials</h2> {/* Hardcoded for now, as it's not in dictionary */} 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dictionary.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <p className="text-lg italic text-gray-800 mb-4">"{testimonial.text}"</p>
              <p className="text-xl font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
