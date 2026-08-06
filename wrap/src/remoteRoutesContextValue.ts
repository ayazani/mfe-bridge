import { createContext } from 'react'
import type { RemoteRouteManifest } from './remoteRouteTypes'

export type RemoteRoutesState =
  | { status: 'loading'; manifests: readonly RemoteRouteManifest[]; error: null }
  | { status: 'ready'; manifests: readonly RemoteRouteManifest[]; error: null }
  | { status: 'error'; manifests: readonly RemoteRouteManifest[]; error: Error }

export const RemoteRoutesContext = createContext<RemoteRoutesState | null>(null)
