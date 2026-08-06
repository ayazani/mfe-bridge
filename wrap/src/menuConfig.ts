import type { RemoteRouteManifest } from './remoteRouteTypes'

export type MenuItem = {
  label: string
  to: string
  end: boolean
}

export type MenuGroup = {
  id: RemoteRouteManifest['id']
  label: string
  accent: RemoteRouteManifest['accent']
  items: MenuItem[]
}

export const loadRemoteRouteManifests = async (): Promise<
  RemoteRouteManifest[]
> => {
  const [mfe1Routes, mfe2Routes] = await Promise.all([
    import('mfe1/routes'),
    import('mfe2/routes'),
  ])

  return [mfe1Routes.routeManifest, mfe2Routes.routeManifest]
}

const createRoutePath = (basePath: string, path: string) =>
  path ? `${basePath}/${path}` : basePath

export const createMenuGroups = (
  manifests: readonly RemoteRouteManifest[],
): MenuGroup[] =>
  manifests.map((manifest) => ({
    id: manifest.id,
    label: manifest.label,
    accent: manifest.accent,
    items: manifest.routes.map((route) => ({
      label: route.label,
      to: createRoutePath(manifest.basePath, route.path),
      end: route.path === '',
    })),
  }))
