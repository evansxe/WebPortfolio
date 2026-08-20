import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /WebPortfolio/, so both `vite build`
// and `vite preview` (both run in production mode) need that base path —
// only the dev server (`vite`/`vite dev`) keeps serving from the root.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/WebPortfolio/' : '/',
  plugins: [react()],
}))
