import { Dictionary } from '@/lib/i18n';

type HeroSectionProps = {
  dictionary: Dictionary;
};

export default function HeroSection({ dictionary }: HeroSectionProps) {
  return (
    <section className="animated-bg text-white text-center py-32 md:py-40 relative overflow-hidden">
      <div className="hero-bg absolute inset-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-gradient">{dictionary.main_content.headline}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 md:mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            {dictionary.main_content.introductory_offer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="night-button glow-effect text-lg px-10 py-4">
              {dictionary.main_content.call_to_action}
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 opacity-10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-500 opacity-10 rounded-full animate-pulse delay-2000"></div>
    </section>
  );
}
