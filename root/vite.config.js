import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'root',
      filename : 'root.js',
      remotes: {
        home: 'http://localhost:5000/assets/home.js',
        auth : 'http://localhost:5002/assets/auth.js'
      },
      shared: ['react']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
