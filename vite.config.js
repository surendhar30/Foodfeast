import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // We're proxying any request that starts with /dapi
      '/dapi': {
        target: 'https://www.swiggy.com',
        changeOrigin: true,
      },
    },
  },
})
