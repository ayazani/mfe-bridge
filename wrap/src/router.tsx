import type { ComponentType } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import Mfe1 from './remotes/Mfe1'
import Mfe2 from './remotes/Mfe2'
import type {
  RemoteAppId,
  RemoteRouteManifest,
} from './remoteRouteTypes'
import { WrapHome } from './WrapHome'
import { WrapLayout } from './WrapLayout'

const remoteComponents: Record<RemoteAppId, ComponentType> = {
  mfe1: Mfe1,
  mfe2: Mfe2,
}

const createRemoteRoute = (manifest: RemoteRouteManifest): RouteObject => {
  const RemoteComponent = remoteComponents[manifest.id]

  return {
    path: `${manifest.basePath.slice(1)}/*`,
    element: <RemoteComponent />,
  }
}

export const createRoutes = (
  manifests: readonly RemoteRouteManifest[],
): RouteObject[] => [
  {
    path: '/',
    element: <WrapLayout manifests={manifests} />,
    children: [
      { index: true, element: <WrapHome /> },
      ...manifests.map(createRemoteRoute),
      {
        path: '*',
        element: <div className="wrap-route-state">Страница не найдена</div>,
      },
    ],
  },
]

export const createAppRouter = (manifests: readonly RemoteRouteManifest[]) =>
  createBrowserRouter(createRoutes(manifests))
