import type { RouteObject } from 'react-router-dom'

export const remoteRoutes = {
  mfe1: {
    id: 'mfe1',
    path: '/mfe1/*',
  },
  mfe2: {
    id: 'mfe2',
    path: '/mfe2/*',
  },
} satisfies Record<'mfe1' | 'mfe2', RouteObject>

export const routes: RouteObject[] = Object.values(remoteRoutes)
