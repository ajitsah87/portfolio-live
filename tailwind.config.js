/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        1200: '1200px',
        768: '768px',
        500: '500px'
      },
      transitionDuration: {
        "3000": "3000ms",
        "8000": "8000ms",
        "7000": "7000ms",
        "6000": "6000ms",
        "5000": "5000ms",
      }
    },
  },
  plugins: [],
}
