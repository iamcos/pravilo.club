import fs from 'fs';
import path from 'path';

export async function getContent(lang: string) {
  const contentPath = path.join(process.cwd(), 'src', 'content', `pravilo_${lang}.json`);
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
  return content;
}

export function getAvailableLanguages() {
  return ['ru', 'en', 'zh'];
}
