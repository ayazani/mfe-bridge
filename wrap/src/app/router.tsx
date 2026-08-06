import type { ComponentType } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ShellLayout } from '../layout/ShellLayout'
import { HomePage } from '../pages/HomePage'
import Mfe1 from '../remotes/Mfe1'
import Mfe2 from '../remotes/Mfe2'
import {
  loadRemoteRouteManifests,
  remoteManifestsLoader,
} from '../remotes/load-manifests'
import type {
  RemoteAppId,
  RemoteRouteManifest,
} from '../remotes/types'
import { SHELL_ROUTE_ID } from './route-ids'
import { NotFoundPage, RouterError, RouterLoading } from './route-ui'

const remoteComponents: Record<RemoteAppId, ComponentType> = {
  mfe1: Mfe1,
  mfe2: Mfe2,
}

const createRemoteRoute = (manifest: RemoteRouteManifest): RouteObject => ({
  id: `remote-${manifest.id}`,
  path: `${manifest.basePath.slice(1)}/*`,
  Component: remoteComponents[manifest.id],
})

const staticRoutes: RouteObject[] = [
  {
    id: SHELL_ROUTE_ID,
    path: '/',
    loader: remoteManifestsLoader,
    Component: ShellLayout,
    ErrorBoundary: RouterError,
    HydrateFallback: RouterLoading,
    children: [{ index: true, Component: HomePage }],
  },
]

export const router = createBrowserRouter(staticRoutes, {
  async patchRoutesOnNavigation({ patch, signal }) {
    const manifests = await loadRemoteRouteManifests()

    if (signal.aborted) {
      return
    }

    patch(SHELL_ROUTE_ID, [
      ...manifests.map(createRemoteRoute),
      {
        id: 'shell-not-found',
        path: '*',
        Component: NotFoundPage,
      },
    ])
  },
})
