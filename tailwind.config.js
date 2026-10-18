/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-base': '#08080A',
        'cyber-surface': '#121217',
        'cyber-border': '#22222A',
        'cyber-red': '#E11D48',
        'cyber-blue': '#2563EB',
        'cyber-cyan': '#06B6D4',
        'cyber-text': '#E2E8F0',
        'cyber-muted': '#94A3B8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [],
}
