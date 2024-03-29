import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8888,
    host: "0.0.0.0",
    open: true
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@configs": fileURLToPath(new URL("./src/configs", import.meta.url)),
      "@routers": fileURLToPath(new URL("./src/routers", import.meta.url))
    }
  }
});
