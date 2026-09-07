export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
        mono: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Paleta extraída da referência: verde, creme, amarelo, coral e preto
        'brand-green': '#344C36',
        'brand-green-dark': '#26382A',
        'brand-cream': '#F7EFE2',
        'brand-cream-dark': '#EDE2CE',
        'brand-yellow': '#FEAE17',
        'brand-coral': '#FE6138',
        'text-main': '#0F0F0D',
        'text-light': '#5C5B4F',
        border: '#E0D6C4',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
