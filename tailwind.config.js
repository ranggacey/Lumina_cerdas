// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.8)',
        'neumorphic-dark': '8px 8px 16px rgba(0,0,0,0.3), -8px -8px 16px rgba(255,255,255,0.05)',
        'neumorphic-feature': '10px 10px 30px rgba(0,0,0,0.1), -10px -10px 30px rgba(255,255,255,0.8)',
        'neumorphic-feature-dark': '10px 10px 30px rgba(0,0,0,0.3), -10px -10px 30px rgba(255,255,255,0.05)'
      },
      colors: {
        primary: {
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7'
        },
        dark: {
          800: '#1E293B',
          900: '#0F172A'
        }
      }
    },
  },
  plugins: [],
}