import type { Config } from 'tailwindcss'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gold: '#FFD716',
        emerald: '#0DA574',
        navy: '#073358',
        midnight: '#001F3E',
        white: '#FFFFFF',
        'light-gray': '#F8F9FA',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        countUp: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        accordionDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        slideInLeft: 'slideInLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        countUp: 'countUp 1s ease-out',
        accordionDown: 'accordionDown 0.2s ease-out',
        accordionUp: 'accordionUp 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config