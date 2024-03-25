import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@atoms": resolve(__dirname, "src/components/atoms"),
      "@molecules": resolve(__dirname, "src/components/atoms"),
    },
  },
});
