import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// O app é servido em https://<usuario>.github.io/genesis/app-react/
export default defineConfig({
  base: '/genesis/app-react/',
  plugins: [react(), tailwindcss()],
})
