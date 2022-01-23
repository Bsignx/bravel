module.exports = {
  purge: ['./node_modules/@bsignx/bravel-ui/dist/*.js'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
