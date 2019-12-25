import {allTexts} from '../data/texts';

export const takeDataByLand = (lang) => {
  console.log(allTexts.find((item) => item.language === lang))
  return allTexts.find((item) => item.language === lang);
}