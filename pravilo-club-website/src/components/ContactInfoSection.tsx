import { Dictionary } from '@/lib/i18n';

type ContactInfoSectionProps = {
  dictionary: Dictionary;
};

export default function ContactInfoSection({ dictionary }: ContactInfoSectionProps) {
  return (
    <section id="contact-info" className="py-16 md:py-24 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          {dictionary.contact.title}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
          {dictionary.contact.location}
        </p>
        {/* Add contact form or other contact details here later */}
      </div>
    </section>
  );
}
