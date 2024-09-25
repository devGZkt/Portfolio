import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // or any other port you want to use
    open: true, // automatically opens the browser
    strictPort: true, // if port is already in use, Vite will fail
    host: true, // allows access via the network
  },
})