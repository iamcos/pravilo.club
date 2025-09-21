import { Dictionary } from '@/lib/i18n';

type WhoIsPraviloForProps = {
  dictionary: Dictionary;
};

export default function WhoIsPraviloFor({ dictionary }: WhoIsPraviloForProps) {
  return (
    <section className="py-16 md:py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          {dictionary.who_is_pravilo_for.title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          {dictionary.who_is_pravilo_for.text}
        </p>
      </div>
    </section>
  );
}
