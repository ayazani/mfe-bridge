import { useEffect, useMemo, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { loadRemoteRouteManifests } from './menuConfig'
import type { RemoteRouteManifest } from './remoteRouteTypes'
import { createAppRouter } from './router'

type AppState =
  | { status: 'loading'; manifests: readonly RemoteRouteManifest[]; error: null }
  | { status: 'ready'; manifests: readonly RemoteRouteManifest[]; error: null }
  | { status: 'error'; manifests: readonly RemoteRouteManifest[]; error: Error }

export const App = () => {
  const [state, setState] = useState<AppState>({
    status: 'loading',
    manifests: [],
    error: null,
  })

  useEffect(() => {
    let active = true

    loadRemoteRouteManifests().then(
      (manifests) => {
        if (active) {
          setState({ status: 'ready', manifests, error: null })
        }
      },
      (error: unknown) => {
        if (active) {
          setState({
            status: 'error',
            manifests: [],
            error: error instanceof Error ? error : new Error(String(error)),
          })
        }
      },
    )

    return () => {
      active = false
    }
  }, [])

  const router = useMemo(
    () =>
      state.status === 'ready' ? createAppRouter(state.manifests) : null,
    [state],
  )

  if (state.status === 'loading') {
    return <div className="wrap-route-state">Загрузка приложений...</div>
  }

  if (state.status === 'error') {
    return (
      <div className="wrap-route-state" role="alert">
        Не удалось загрузить маршруты: {state.error.message}
      </div>
    )
  }

  return <RouterProvider router={router!} />
}

export default App
