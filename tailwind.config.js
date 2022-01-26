module.exports = {
  purge: ['./node_modules/@bsignx/bravel-ui/dist/*.js'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray900: '#111827',
      gray50: '#F9FAFB',
      fuchsia500: '#D946EF',
      orange500: '#F97316',
      green500: '#22C55E',
      rose500: '#F43F5E',
      gray700: '#374151',
      gray500: '#6B7280',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}
