import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true,      // listen on 0.0.0.0
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'ec2-65-0-91-60.ap-south-1.compute.amazonaws.com',
      '65.0.91.60',
      'localhost'
    ],
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
        },
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
  },  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})