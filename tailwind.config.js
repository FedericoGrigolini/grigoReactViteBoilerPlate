/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                negative: 'rgb(var(--color-negative)/ <alpha-value>)',
                positive: 'rgb(var(--color-positive)/ <alpha-value>)',
                warning: 'rgb(var(--color-warning)/ <alpha-value>)',
                disabled: 'rgb(var(--color-disabled)/ <alpha-value>)',
                lightBackgroud:
                    'rgb(var(--color-lightBackgroud)/ <alpha-value>)',
                background: 'rgb(var(--color-background)/ <alpha-value>)',
                darkBackground:
                    'rgb(var(--color-darkBackground)/ <alpha-value>)',
                primary: 'rgb(var(--color-primary)/ <alpha-value>)',
                darkPrimary: 'rgb(var(--color-darkPrimary)/ <alpha-value>)',
                lightPrimary: 'rgb(var(--color-lightPrimary)/ <alpha-value>)',
                secondary: 'rgb(var(--color-secondary)/ <alpha-value>)',
                darkSecondary: 'rgb(var(--color-darkSecondary)/ <alpha-value>)',
                lightSecondary:
                    'rgb(var(--color-lightSecondary)/ <alpha-value>)',
                highlight: 'rgb(var(--color-highlight)/ <alpha-value>)'
            },
            fontFamily: {
                FellGreat: ['"IM Fell Great Primer SC"', 'serif'],
                metalmania: ['"Metal Mania"', 'cursive']
            },
            animation: {
                'reverse-spin': 'reverse-spin 1s linear infinite'
            },
            keyframes: {
                'reverse-spin': {
                    from: {
                        transform: 'rotate(360deg)'
                    }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
