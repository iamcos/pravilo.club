"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LanguageSwitcherProps = {
  currentLang: string;
};

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getLocalizedPath = (lang: string) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === currentLang) {
      segments[0] = lang;
    } else {
      segments.unshift(lang); // Add lang if not already present (e.g., root path)
    }
    return `/${segments.join('/')}`;
  };

  return (
    <div className="flex space-x-2">
      <Link href={getLocalizedPath('en')} className={currentLang === 'en' ? 'font-bold' : ''}>
        English
      </Link>
      <Link href={getLocalizedPath('ru')} className={currentLang === 'ru' ? 'font-bold' : ''}>
        Русский
      </Link>
      <Link href={getLocalizedPath('zh')} className={currentLang === 'zh' ? 'font-bold' : ''}>
        中文
      </Link>
    </div>
  );
}
