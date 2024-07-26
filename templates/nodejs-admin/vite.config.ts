import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import honohub from "@honohub/vite";
import hubConfig from "./hub.config";

export default defineConfig({
  plugins: [
    react(),
    honohub({
      config: hubConfig,
      basePath: "/",
    }),
  ],
});
