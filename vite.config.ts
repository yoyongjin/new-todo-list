import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@atoms": resolve(__dirname, "src/components/atoms"),
      "@molecules": resolve(__dirname, "src/components/atoms"),
    },
  },
});
