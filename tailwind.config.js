/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#3A4E4A',
        cream: '#ECEAE3',
      },
      fontFamily: {
        headline: ['"Cormorant"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        headline: '1.28px',
        overline: '0.8px',
        button: '1.92px',
        body: '0.32px',
      },
    },
  },
  plugins: [],
}
