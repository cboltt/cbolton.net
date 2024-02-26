import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { htmlPrerender } from "vite-plugin-html-prerender";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      /**
       * Required: Output directory of `vite build`.
       */
      staticDir: path.join(__dirname, "dist"),

      /**
       * Required: List of routes to pre-render.
       */
      routes: ["/"],
    }),
  ],
});
