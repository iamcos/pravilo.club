import { Dictionary } from '@/lib/i18n';

type WhatIsPraviloProps = {
  dictionary: Dictionary;
};

export default function WhatIsPravilo({ dictionary }: WhatIsPraviloProps) {
  return (
    <section id="what-is-pravilo" className="py-16 md:py-24 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          {dictionary.what_is_pravilo.title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          {dictionary.what_is_pravilo.text}
        </p>
      </div>
    </section>
  );
}
