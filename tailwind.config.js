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
      smalltitle: '2.7rem',
      thirdtitle: '2.4rem',
      sm: '1rem',
      subtitle: '1.5rem',
      normal: '1.2rem',
      footer: '2.0 rem',
    },
    letterSpacing: {
      londrina: '0.35rem',
      mono: '0.05rem',
    },
  },
  plugins: [],
}
