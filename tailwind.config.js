const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: colors.black,
                white: colors.white,
                green: colors.green,
                blue: {
                    400: '#947EFF',
                    500: '#9088FF',
                    600: '#7F76FF',
                    650: '#7B72FE',
                    700: '#746BF4',



                },
                orange: {
                    500: '#ED7138',
                },
                gray: {
                    600: '#72777A',
                    700: '#5A6664',
                    800: '#404446',
                    900: '#0F1214',
                }
            }
        },
    },
    plugins: [

        plugin(({addComponents, theme, addUtilities}) => {
            addComponents({

                '.text-link': {
                    textUnderlineOffset: 4,
                    color: 'rgba(255, 255, 255, .9)',
                    transition: 'text-decoration-color .3s ease-in-out',
                    textDecorationLine: 'underline',
                    textDecorationColor: 'rgba(255, 0, 0, 0.2)',
                    '&:hover': {
                        textDecorationColor: 'rgba(255, 255, 255, 0.9)',
                    },
                },

            });
            addUtilities({
                '.block-shadow': {
                    boxShadow: '0px 1px 24px 4px rgba(20, 20, 20, 0.08)',
                },

                '.outline-border-none': {
                    outline: 'none',
                    border: 'none',
                },

                '.flex-center-between': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },

                '.image-like-bg': {
                    objectPosition: 'center',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                },
            })
        }),
    ],
}