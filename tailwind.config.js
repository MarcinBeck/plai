/** @type {import('tailwindcss').Config} */
module.exports = {
  // Wskazuje, gdzie szukać klas Tailwind (jest to krytyczne dla Next.js App Router)
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Obsługuje nasz plik app/page.jsx
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Przyda się w przyszłości, gdy dodamy komponenty
  ],
  theme: {
    extend: {}, // Tutaj można dodawać niestandardowe kolory, fonty itp.
  },
  plugins: [], // Tutaj można dodawać pluginy Tailwind, np. @tailwindcss/typography
};
