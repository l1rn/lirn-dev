import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
	  host: true,
	  allowedHosts: ['www.lirn-dev.ru', 'lirn-dev.ru', 'test.lirn-dev.ru'],
	}
})
