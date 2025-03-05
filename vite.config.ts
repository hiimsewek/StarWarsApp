import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      constants: "/src/constants",
      hooks: "/src/hooks",
      pages: "/src/pages",
      router: "/src/router",
      services: "/src/services",
      store: "/src/store",
      styles: "/src/styles",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
