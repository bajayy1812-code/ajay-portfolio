/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F3EEE3',
          secondary: '#E9E2D5',
          card: '#FFFFFF',
          subtle: '#FAF7F0',
        },
        ink: {
          DEFAULT: '#111111',
          light: '#242424',
          subtle: '#3A3A3A',
        },
        orange: {
          DEFAULT: '#D9541E',
          hover: '#C24513',
          light: '#F4733E',
          subtle: 'rgba(217, 84, 30, 0.08)',
          glow: 'rgba(217, 84, 30, 0.25)',
        },
        muted: {
          DEFAULT: '#77736B',
          light: '#918D85',
          dark: '#59564F',
        },
        border: {
          DEFAULT: '#D8D0C2',
          subtle: '#E2DBD0',
          strong: '#BDB3A3',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(17, 17, 17, 0.04)',
        'card-hover': '0 8px 24px rgba(17, 17, 17, 0.08)',
        'orange-glow': '0 4px 20px rgba(217, 84, 30, 0.25)',
      },
      borderColor: {
        DEFAULT: '#D8D0C2',
      },
    },
  },
  plugins: [],
}
