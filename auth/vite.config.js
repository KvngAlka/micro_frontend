import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'auth',
      filename: 'auth.js',
      exposes: {
        './Auth': './src/Auth'
      },
      shared: ['react']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5002,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
