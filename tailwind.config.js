const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your React/TypeScript files
    flowbite.content(),
  ],
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "-ms-overflow-style": "none" /* for Internet Explorer 10+ */,
          "scrollbar-width": "none" /* for Firefox */,
        },
        ".scrollbar-hide": {
          overflow: "hidden",
        },
        ".scrollbar-auto": {
          overflow: "auto",
        },
      });
    },
  ],
};
