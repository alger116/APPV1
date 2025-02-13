module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Õige failide asukoht
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#10B981',
        accent: '#F59E0B',
        danger: '#EF4444',
        warning: '#FBBF24',
        info: '#3B82F6',
        light: '#F3F4F6',
        dark: '#111827',
        buttonRed: '#FF0000',
        buttonGreen: '#00FF00',
        buttonBlue: '#0000FF',
        buttonYellow: '#FFFF00',
        buttonPurple: '#800080',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        xs: '480px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    preflight: true, // Veendu, et Tailwind'i baasstiilid rakenduvad
  },
};
