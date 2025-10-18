import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, 
        additionalData: `
          @import "@/styles/_base.scss";
        `,
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
