/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['SF Pro Display', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        'funky': ['Bebas Neue', 'Impact', 'sans-serif'],
        'intro': ['Oswald', 'sans-serif'],
        'text': ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        'system': ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'modern-xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'modern-sm': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'modern-base': ['1rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'modern-lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'modern-xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'modern-2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'modern-3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'modern-4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        'modern-5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        'modern-6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.01em' }],
      },
    },
  },
  plugins: [],
}
