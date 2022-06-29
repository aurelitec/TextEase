module.exports = {
  content: {
    files: ['./src/**/*.{html,js,njk,md}'],
  },
  theme: {
    extend: {
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
