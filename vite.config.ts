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

const copyBuildFiles = () => {
  return {
    name: "copy-build-files",
    closeBundle() {
      fs.copyFile("package.json", "dist/package.json");
    },
  };
};

export default defineConfig({
  plugins: [react(), copyBuildFiles()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: "dist",
  },
});
