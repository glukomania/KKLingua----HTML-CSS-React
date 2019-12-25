import {allTexts} from '../data/texts';

export const takeDataByLand = (lang) => {
  return allTexts.find((item) => item.language === lang);
}