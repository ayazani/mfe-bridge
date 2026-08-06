import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routeManifest } from './routeManifest'
import { createAppRouter } from './router'

type AppProps = {
  basename?: string
}

const App = ({ basename = routeManifest.basePath }: AppProps) => {
  const router = useMemo(() => createAppRouter(basename), [basename])

  return <RouterProvider router={router} />
}

export default App
