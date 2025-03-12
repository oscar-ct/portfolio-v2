/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { textShadow: 'none' },
          'to': { textShadow: '0 0 15px rgba(255, 255, 255, 0.51)' },
        },
      },
    },
  },
  plugins: [
      require('daisyui'),
  ],
}

