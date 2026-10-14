import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      federation({
        name: 'wrap',
        remotes: {
          mfe1: {
            type: 'module',
            name: 'mfe1',
            entry:
              env.VITE_MFE1_REMOTE_ENTRY ??
              'http://localhost:5001/mfe1/remoteEntryMfe1.js',
          },
          mfe2: {
            type: 'module',
            name: 'mfe2',
            entry:
              env.VITE_MFE2_REMOTE_ENTRY ??
              'http://localhost:5002/mfe2/remoteEntryMfe2.js',
          },
        },
        shared: {
          react: { singleton: true },
          'react-dom/': { singleton: true },
        },
        dts: false,
      }),
    ],
    server: {
      port: 5010,
      strictPort: true,
    },
    preview: {
      port: 5010,
      strictPort: true,
    },
  }
})
