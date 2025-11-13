import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        learnMore: './learn-more.html',
        pricing: './pricing.html',
        privacyPolicy: './privacy-policy.html',
        termsOfService: './terms-of-service.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

