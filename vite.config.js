import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/shiny-island-beauty/', // ✅ 部署子目錄時設定
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    historyApiFallback: true, // ✅ React Router 刷新不會 404（非必要但建議加）
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
})
