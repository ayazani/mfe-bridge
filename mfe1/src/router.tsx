import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { CatalogPage } from './pages/CatalogPage'
import { DashboardPage } from './pages/DashboardPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SettingsPage } from './pages/SettingsPage'
import { routeManifest } from './routeManifest'

const [, catalogRoute, settingsRoute] = routeManifest.routes

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: catalogRoute.path, element: <CatalogPage /> },
      { path: settingsRoute.path, element: <SettingsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

export const createAppRouter = (basename: string = routeManifest.basePath) =>
  createBrowserRouter(routes, { basename })
