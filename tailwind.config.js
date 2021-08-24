const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            zIndex: {},
            fontSize: {
                'xx': '.6rem',
            },
            keyframes: {
                opacity: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                spinner: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: ' rotate(360deg)',
                    },
                },
                fadeLeft: {
                    '0%': {
                        transform: 'translateX(-50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                fadeRight: {
                    '0%': {
                        transform: 'translateX(50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                spinner: ' spinner 1s linear infinite',
                opacity: 'opacity 0.2s ease-in-out',
                fadeLeft: 'fadeLeft 1s ease-in-out',
                fadeRight: 'fadeRight 1s ease-in-out',
            },
            width: {
                'max-content': 'max-content',
                '70': '17.5rem',
                '97': '26rem',
                '86': '22rem',
                '76': '19.5rem',
                '18': '5rem',
            },
            height: {
                '11': '0.10rem',
            },
            maxWidth: {
                '8xl': '1920px',
            },
            spacing: {},
            colors: {
                gray: {
                    ...colors.gray,
                    250: '#E5E5E5',
                },
                watusi: {
                    ...colors.watusi,
                    250: '#FFE0D2',
                },
                green: {
                    ...colors.green,
                    550: '#23c0b5',
                },
                red: {
                    ...colors.red,
                    50: '#FF5800',
                },
                brown: {
                    ...colors.brown,
                    50: '#692B06',
                },
                gren: {
                    ...colors.gren,
                    50: '#007554',
                },
                black: {
                    ...colors.black,
                    50: '#2D2927',
                },
                blacks: {
                    ...colors.blacks,
                    100: '#000',
                },
            },
            textColor: {},
            boxShadow: {
                'outline-2': '0 0 0 2px var(--accents-2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            lineHeight: {
                'extra-loose': '2.2',
            },
            scale: {
                120: '1.2',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
