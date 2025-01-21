// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import fs from "fs-extra";

const copyProcfile = () => {
  return {
    name: "copy-procfile",
    closeBundle() {
      fs.copyFile("Procfile", "dist/Procfile");
    },
  };
};

export default defineConfig({
  plugins: [react(), copyProcfile()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: "dist",
  },
});
