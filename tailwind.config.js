/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blue: '#05031D',
      white: '#D0D7E0',
      grey: '#666575',
      gradient1: '#5F0B7F',
      gradient2: '#752C55',
      gradient3: '#77622B',
      darkGradient3: '#3D133B',
      darkGradient2: '#31054B',
      darkGradient1: '#3E2432',
      red: '#FF0000',
      green: '#0A5808',
    },
    fontFamily: {
      londrinaSolid: ['Londrina Solid', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    fontWeight: {
      thin: 100,
      normal: 300,
      semibold: 600,
      bold: 900,
    },

    fontSize: {
      nav: '1.6rem',
      title: '3rem',
      smalltitle: '2rem',
      thirdtitle: '1.7rem',
      sm: '1rem',
      subtitle: '1.3rem',
      normal: '1.2rem',
      footer: '1.0 rem',
    },
    letterSpacing: {
      londrina: '0.35rem',
      mono: '0.05rem',
    },
    extend: {
      keyframes: {
        slideOut: {
          '0%': { transform: 'translateY(0) translateX(5)' },
          '100%': { transform: 'translateY(105%)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(105%)' },
          '100%': { transform: 'translateY(0) translateX(5)' },
        },
        gradient: {
          '0%': { backgroundSize: '400% 400%', backgroundPosition: '400% 0%' },
          '100%': { backgroundSize: '200% 200%', backgroundPosition: '0% 0%' },
          '50%': { backgroundSize: '300% 300%', backgroundPosition: '100% 0%' },
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        dissapear: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        arrow: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        gradient: 'gradient .3 ease infinite',
        slideOut: 'slideOut .3s forwards',
        slideIn: 'slideIn .3s forwards',
        appear: 'appear 1s forwards',
        dissapear: 'appear 1s reverse forwards',
        arrow: 'arrow 1s infinite',
      },
    },
  },
  plugins: [],
}
