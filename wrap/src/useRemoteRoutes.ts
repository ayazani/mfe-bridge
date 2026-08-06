import { useContext } from 'react'
import { RemoteRoutesContext } from './remoteRoutesContextValue'

export const useRemoteRoutes = () => {
  const context = useContext(RemoteRoutesContext)

  if (!context) {
    throw new Error('useRemoteRoutes must be used inside RemoteRoutesProvider')
  }

  return context
}
