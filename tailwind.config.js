/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        muted: '#667085',
        line: '#E7EAF0',
      },
      boxShadow: {
        card: '0 3px 14px rgba(17, 24, 39, 0.035)',
      },
    },
  },
  plugins: [],
}
