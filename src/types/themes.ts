export type AppTheme = {
    lightBackgroud: string;
    background: string;
    darkBackground: string;
    primary: string;
    darkPrimary: string;
    lightPrimary: string;
    secondary: string;
    darkSecondary: string;
    lightSecondary: string;
    highlight: string;
    disabled: string;
    negative: string;
    positive: string;
    warning: string;
};

export type AppThemes = {
    [key: string]: AppTheme;
};

export type TailwindMappedTheme = {
    '--color-background': string;
    '--color-lightBackgroud': string;
    '--color-darkBackground': string;

    '--color-primary': string;
    '--color-lightPrimary': string;
    '--color-darkPrimary': string;

    '--color-secondary': string;
    '--color-lightSecondary': string;
    '--color-darkSecondary': string;

    '--color-positive': string;
    '--color-negative': string;
    '--color-warning': string;
    '--color-disabled': string;
    '--color-highlight': string;
};
