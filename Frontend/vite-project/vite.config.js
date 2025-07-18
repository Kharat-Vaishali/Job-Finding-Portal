// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react'
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Your backend server
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});

