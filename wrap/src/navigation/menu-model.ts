import type { RemoteRouteManifest } from '../remotes/types'

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

export const getMenuLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'wrap-menu-link wrap-menu-link--active' : 'wrap-menu-link'

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
