import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { htmlPrerender } from "vite-plugin-html-prerender";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: ["/", "/28"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        "28": "28.html",
      },
    },
  },
});
