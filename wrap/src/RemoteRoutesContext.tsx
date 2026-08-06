import type { PropsWithChildren } from 'react'
import type { RemoteRouteManifest } from './remoteRouteTypes'
import { RemoteRoutesContext } from './remoteRoutesContextValue'

type RemoteRoutesProviderProps = PropsWithChildren<{
  manifests: readonly RemoteRouteManifest[]
}>

export const RemoteRoutesProvider = ({
  children,
  manifests,
}: RemoteRoutesProviderProps) => {
  return (
    <RemoteRoutesContext.Provider
      value={{ status: 'ready', manifests, error: null }}
    >
      {children}
    </RemoteRoutesContext.Provider>
  )
}
