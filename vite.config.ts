import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages (project pages) friendly relative base:
  // This allows deploying to https://<user>.github.io/<repo>/ without editing.
  base: './',
})
