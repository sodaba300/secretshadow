import { defineConfig } from 'vite'

export default defineConfig({
  base: './',

  publicDir: 'public',

  build: {
    outDir: 'docs',
    emptyOutDir: true,

    // Phaser 번들 크기 경고 완화
    chunkSizeWarningLimit: 1500,
  },

  server: {
    port: 5173,
    host: true,
  },

  preview: {
    port: 4173,
    host: true,
  },
})