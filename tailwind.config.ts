import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#166534',
        secondary: '#f97316',
        dark: '#1f2937',
        gray: '#6b7280',
        light: '#f9fafb',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translate(-50%, 100px)', opacity: '0' },
          '100%': { transform: 'translate(-50%, 0)', opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
        slideUp: 'slideUp 0.4s ease forwards',
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0,0,0,0.05)',
        'card-hover': '0 24px 40px -12px #16653455',
      }
    },
  },
  plugins: [],
};
export default config;
