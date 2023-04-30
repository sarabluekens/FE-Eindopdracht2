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
    },
    fontFamily: {
      londrinaSolid: ['Londrina Solid', 'sans-serif'],
    },
    fontWeight: {
      thin: 100,
      normal: 400,
      bold: 900,
    },
  },
  plugins: [],
}
