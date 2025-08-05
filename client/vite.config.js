import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "da03fbb2-c50d-4532-a806-099c84bfcb68-00-1w78rp5p3glnl.picard.replit.dev",
    ],
  },
});
