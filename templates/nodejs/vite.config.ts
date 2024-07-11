import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import honohub from "@honohub/vite";
import hubConfig from "./hub.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), honohub({ config: hubConfig })],
});
