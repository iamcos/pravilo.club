import Link from 'next/link';
import { Dictionary } from '@/lib/i18n';

type FooterProps = {
  dictionary: Dictionary;
  lang: string;
};

export default function Footer({ dictionary, lang }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={`/${lang}/history`}>
                {dictionary.footer.about}
              </Link>
            </li>
            {dictionary.footer.privacy.map((item, index) => (
              <li key={index}>
                <Link href={`/${lang}/${item.toLowerCase().replace(/ /g, '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="https://t.me/praviloclub" target="_blank" rel="noopener noreferrer">
                {dictionary.footer.social}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-sm">
          {dictionary.footer.credits}
        </div>
      </div>
    </footer>
  );
}
