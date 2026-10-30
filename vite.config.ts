import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build: {
    rollupOptions: {
      input: { main: "index.html", docs: "docs.html" },
    },
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
});
