// Types
import { Option } from 'types/structs';

export const ENGLISH = 'en';
export const ITALIAN = 'it';

export const ARRAY = [ENGLISH, ITALIAN];

export const LANGUAGES_OPTIONS: Option[] = [
    { name: '🇬🇧 English', value: ENGLISH },
    { name: '🇮🇹 Italiano', value: ITALIAN }
];

export const fromLanguageToLocale = (lang: string) => {
    if (lang === ITALIAN) return 'it_IT';
    if (lang === ENGLISH) return 'en_US';
    else return 'en_US';
};
