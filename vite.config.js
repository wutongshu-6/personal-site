import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isGitHubPages = mode === "pages";

  return {
    base: isGitHubPages ? "/personal-site/" : "/",
    build: isGitHubPages ? { outDir: "docs" } : {},
    plugins: [react()],
    server: {
      host: true,
      port: 5173,
    },
  };
});