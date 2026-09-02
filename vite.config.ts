import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from the root of the custom domain
// (portfolio.devanforge.com), so the base path is '/' in every mode.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
