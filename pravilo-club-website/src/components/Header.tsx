import Link from 'next/link';
import { Dictionary } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

type HeaderProps = {
  dictionary: Dictionary;
  lang: string;
};

export default function Header({ dictionary, lang }: HeaderProps) {
  const getSectionId = (navItem: string) => {
    switch (navItem) {
      case 'About Pravilo':
      case 'О Правиле':
      case '关于 Pravilo':
        return 'what-is-pravilo';
      case 'Services & Pricing':
      case 'Услуги и цены':
      case '服务与定价':
        return 'services-pricing';
      case 'Outdoor Adventures':
      case 'Приключения на природе':
      case '户外探险':
        return 'outdoor-adventures';
      case 'Handcrafted Artisan':
      case 'Ручные ремесла':
      case '手工艺术':
        return 'handcrafted-artisan';
      case 'Wellness Therapies':
      case 'Оздоровительные терапии':
      case '健康疗法':
        return 'wellness-therapies';
      case 'Spiritual Practices':
      case 'Духовные практики':
      case '精神实践':
        return 'spiritual-practices';
      case 'Schedule & Booking':
      case 'Расписание и бронирование':
      case '日程与预订':
        return 'whatsapp-booking';
      case 'Contact':
      case 'Контакт':
      case '联系':
        return 'contact-info';
      default:
        return ''; // Fallback or handle other cases
    }
  };

  return (
    <header className="nav-glass fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gradient">{dictionary.header.logo}</div>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          {dictionary.header.navigation.map((item, index) => (
            <li key={index}>
              <Link 
                href={`#${getSectionId(item)}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher currentLang={lang} />
      </nav>
    </header>
  );
}
