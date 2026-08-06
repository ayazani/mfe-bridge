import type { RemoteRouteManifest } from './types'

export type RemoteManifests = readonly RemoteRouteManifest[]

let remoteManifestsPromise: Promise<RemoteManifests> | undefined

export const loadRemoteRouteManifests = (): Promise<RemoteManifests> => {
  remoteManifestsPromise ??= Promise.all([
    import('mfe1/routes'),
    import('mfe2/routes'),
  ]).then(([mfe1Routes, mfe2Routes]) => [
    mfe1Routes.routeManifest,
    mfe2Routes.routeManifest,
  ])

  return remoteManifestsPromise
}

export const remoteManifestsLoader = () => loadRemoteRouteManifests()
