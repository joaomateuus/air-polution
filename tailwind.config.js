/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {},
  },
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
}

