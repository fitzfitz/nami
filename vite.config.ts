import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3800,
    open: true,
  },
  resolve: {
    alias: [{ find: "@nami", replacement: path.resolve(__dirname, "src") }],
  },
  optimizeDeps: {
    force: true,
  },
});
