/** @type {import('tailwindcss').Config} */
module.exports = {
  // theme: {
  //   extend: {
  //     saturate: {
  //       : '0',
  //     },
  //   },
  // },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
};
