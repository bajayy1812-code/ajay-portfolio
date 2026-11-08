/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          main: '#171114',
          secondary: '#241820',
          card: '#302029',
          border: '#49333D',
          hover: '#422633',
          muted: '#281B22',
        },
        rose: {
          DEFAULT: '#E87991',
          hover: '#D4637B',
          secondary: '#D6A6A0',
          subtle: 'rgba(232, 121, 145, 0.12)',
          glow: 'rgba(232, 121, 145, 0.25)',
        },
        text: {
          primary: '#FFF7F7',
          secondary: '#B9A6AA',
          muted: '#8D7B80',
        },
        border: {
          DEFAULT: '#49333D',
          subtle: '#38252E',
          strong: '#5E424F',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.35)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'rose-glow': '0 4px 20px rgba(232, 121, 145, 0.25)',
      },
      borderColor: {
        DEFAULT: '#49333D',
      },
    },
  },
  plugins: [],
}
