import { getDictionary } from '@/lib/i18n';
import HeroSection from '@/components/HeroSection';
import WhatIsPravilo from '@/components/WhatIsPravilo';
import WhoIsPraviloFor from '@/components/WhoIsPraviloFor';
import ServicesSection from '@/components/ServicesSection';
import OutdoorAdventuresSection from '@/components/OutdoorAdventuresSection';
import HandcraftedArtisanSection from '@/components/HandcraftedArtisanSection';
import WellnessTherapiesSection from '@/components/WellnessTherapiesSection';
import SpiritualPracticesSection from '@/components/SpiritualPracticesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactInfoSection from '@/components/ContactInfoSection';
import WhatsAppBookingForm from '@/components/WhatsAppBookingForm';

export default async function Home() {
  const lang = process.env.NEXT_PUBLIC_LOCALE || 'en'; // Get lang from env variable
  const dictionary = await getDictionary(lang);

  return (
    <main className="pt-20">
      <HeroSection dictionary={dictionary} />
      <WhatIsPravilo dictionary={dictionary} />
      <WhoIsPraviloFor dictionary={dictionary} />
      <ServicesSection dictionary={dictionary} />
      <OutdoorAdventuresSection dictionary={dictionary} />
      <HandcraftedArtisanSection dictionary={dictionary} />
      <WellnessTherapiesSection dictionary={dictionary} />
      <SpiritualPracticesSection dictionary={dictionary} />
      <TestimonialsSection dictionary={dictionary} />
      <ContactInfoSection dictionary={dictionary} />
      <WhatsAppBookingForm dictionary={dictionary} />
    </main>
  );
}
