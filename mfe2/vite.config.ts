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
      name: 'mfe2',
      filename: 'remoteEntryMfe2.js',
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
    port: 5002,
    strictPort: true,
    origin: 'http://localhost:5002',
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
  base: '/mfe2/',
})
