import { Dictionary } from '@/lib/i18n';

type MishaSectionProps = {
  dictionary: Dictionary;
};

export default function MishaSection({ dictionary }: MishaSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">About Misha</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          {/* Placeholder for Misha's personal narrative */}
          This section will tell Misha's story, his philosophy on Pravilo, and his journey.
          Please provide the text for this section.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for video reviews */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-4">Video Reviews</h3>
            <p className="text-gray-700 mb-4">Please provide links to hosted video reviews (e.g., YouTube, Vimeo).</p>
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500 rounded-lg">
              Video Placeholder
            </div>
          </div>
          {/* Placeholder for photographs */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-4">Photographs</h3>
            <p className="text-gray-700 mb-4">Please provide digital image files for this section.</p>
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500 rounded-lg">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
