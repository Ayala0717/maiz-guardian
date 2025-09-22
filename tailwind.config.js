// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3fbea',
          100: '#e2f5d2',
          200: '#c8ebab',
          300: '#a4dc7a',
          400: '#81ca4c',
          500: '#65b032',
          600: '#4c8c24',
          700: '#3c6b20',
          800: '#32561e',
          900: '#2c491e',
          950: '#14280b',
        },
      },
    },
  },
  plugins: [],
})
