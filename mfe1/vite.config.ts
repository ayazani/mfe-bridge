import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const reactRouterRuntime = fileURLToPath(
  new URL('./node_modules/react-router/dist/production/index.mjs', import.meta.url),
)

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^react-router-dom$/,
        replacement: '@module-federation/bridge-react/router-v7',
      },
      {
        find: /^react-router\/dist\/production\/index\.js$/,
        replacement: reactRouterRuntime,
      },
    ],
  },
  plugins: [
    react(),
    federation({
      name: 'mfe1',
      filename: 'remoteEntryMfe1.js',
      exposes: {
        './AppRemote': './src/AppRemote.tsx',
        './routes': './src/routeManifest.ts',
      },
      shared: {
        react: { singleton: true },
        'react-dom/': { singleton: true },
      },
      dts: false,
    }),
  ],
  server: {
    port: 5001,
    strictPort: true,
    origin: 'http://localhost:5001',
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
  base: '/mfe1/',
})
