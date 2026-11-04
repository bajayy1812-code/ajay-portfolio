/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#0B0F19',
          secondary: '#111827',
          card: '#151D2E',
          surface: '#1E293B',
        },
        primary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          light: '#818CF8',
          dark: '#4338CA',
        },
        secondary: {
          DEFAULT: '#22D3EE',
          hover: '#06B6D4',
          light: '#67E8F9',
          dark: '#0891B2',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: {
          DEFAULT: '#1E293B',
          light: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'indigo-glow': '0 0 25px rgba(99, 102, 241, 0.25)',
        'cyan-glow': '0 0 25px rgba(34, 211, 238, 0.25)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.45)',
      },
      borderColor: {
        DEFAULT: '#1E293B',
      },
    },
  },
  plugins: [],
}
