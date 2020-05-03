import { contentNavbarEn } from './navbar/en';
import { contentNavbarRu } from './navbar/ru';

export const getContent = (lang: string) => {
  const langSwitch: any = {
    ru: contentNavbarRu,
    en: contentNavbarEn,
  };
  return lang in langSwitch ? langSwitch[lang] : langSwitch.ru;
}