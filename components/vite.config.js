import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'components',
      filename: 'components.js',
      exposes: {
        './Navbar': './src/Navbar.jsx',
        './Footer' : './src/Footer.jsx'
      },
      shared: ['react']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5003,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
