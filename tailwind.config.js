/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'midnight-blue': 'var(--color-midnight-blue)',
        'electric-teal': 'var(--color-electric-teal)',
        'soft-white': 'var(--color-soft-white)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, var(--color-gold-start), var(--color-gold-end))',
      },
      boxShadow: {
        'glint': '0 10px 30px rgba(255, 179, 0, 0.25)',
      },
      borderRadius: {
        'gl': '20px',
      }
    },
  },
  plugins: [],
}
