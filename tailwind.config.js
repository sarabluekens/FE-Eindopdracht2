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
      white: '#E4EFEE',
      grey: '#666575',
      gradient1: '#5F0B7F',
      gradient2: '#752C55',
      gradient3: '#77622B',
    },
    fontFamily: {
      londrinaSolid: ['Londrina Solid', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    fontWeight: {
      thin: 100,
      normal: 400,
      bold: 900,
    },

    fontSize: {
      nav: '1.6rem',
      active: '1.7rem',
      title: '4.4rem',
      subtitle: '1.5rem',
      promoTitle: '2.4rem',
      normal: '1.2rem',
    },
    letterSpacing: {
      londrina: '0.35rem',
      mono: '0.05rem',
    },
  },
  plugins: [],
}
