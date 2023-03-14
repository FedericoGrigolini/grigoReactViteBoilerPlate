// Locale
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Languages
import * as LANGUAGES from './languages';
import english from './english.json';
import italian from './italian.json';

const resources = {
    [LANGUAGES.ENGLISH]: english,
    [LANGUAGES.ITALIAN]: italian
};

i18n.use(initReactI18next).init({
    resources,
    lng: LANGUAGES.ENGLISH,

    keySeparator: false,
    nsSeparator: '.',

    interpolation: {
        escapeValue: false
    },

    react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
        useSuspense: true
    }
});

export function isLanguageAvailable(lang: string) {
    return LANGUAGES.ARRAY.includes(lang);
}

export default i18n;
