import { AppTheme, AppThemes, TailwindMappedTheme } from 'types/themes';
import { hexToRgbTextString } from 'utils';
import edalabTheme from './defaultTheme';

const themes: AppThemes = {
    base: edalabTheme
};

export const mapTheme = (variables: AppTheme): TailwindMappedTheme => {
    return {
        '--color-background': hexToRgbTextString(variables.background) || '',
        '--color-lightBackgroud':
            hexToRgbTextString(variables.lightBackgroud) || '',
        '--color-darkBackground':
            hexToRgbTextString(variables.darkBackground) || '',

        '--color-primary': hexToRgbTextString(variables.primary) || '',
        '--color-lightPrimary':
            hexToRgbTextString(variables.lightPrimary) || '',
        '--color-darkPrimary': hexToRgbTextString(variables.darkPrimary) || '',

        '--color-secondary': hexToRgbTextString(variables.secondary) || '',
        '--color-lightSecondary':
            hexToRgbTextString(variables.lightSecondary) || '',
        '--color-darkSecondary':
            hexToRgbTextString(variables.darkSecondary) || '',

        '--color-positive': hexToRgbTextString(variables.positive) || '',
        '--color-negative': hexToRgbTextString(variables.negative) || '',
        '--color-warning': hexToRgbTextString(variables.warning) || '',
        '--color-disabled': hexToRgbTextString(variables.disabled) || '',
        '--color-highlight': hexToRgbTextString(variables.highlight) || ''
    };
};

export const applyTheme = (theme: 'base' | 'alt'): void => {
    const themeObject = mapTheme(themes[theme]);
    if (!themeObject) return;

    const root = document.documentElement;

    let property: keyof TailwindMappedTheme;
    for (property in themeObject) {
        root.style.setProperty(property, themeObject[property]);
    }
};

export const DEFAULT_THEME: string = 'base';
