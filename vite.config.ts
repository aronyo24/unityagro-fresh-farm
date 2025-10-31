import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Compute a sensible `base` for GitHub Pages deployments.
// In GitHub Actions the env var GITHUB_REPOSITORY is available as "owner/repo",
// so we use that to produce "/repo/" which is correct for project pages.
const computeBase = () => {
  const repo = process.env.GITHUB_REPOSITORY;
  if (repo && repo.includes("/")) {
    return `/${repo.split("/")[1]}/`;
  }
  // default for local dev or user pages
  return "/";
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: computeBase(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

