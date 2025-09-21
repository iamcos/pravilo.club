import en from '../../../pravilo_en.json'
import ru from '../../../pravilo_ru.json'
import zh from '../../../pravilo_zh.json'

const dictionaries = {
  en: () => en,
  ru: () => ru,
  zh: () => zh,
}

export const getDictionary = (locale: string) => {
  if (!locale || !dictionaries[locale as keyof typeof dictionaries]) {
    return dictionaries.en(); // Fallback to English if locale is not found
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};

export type Dictionary = ReturnType<typeof getDictionary>;
