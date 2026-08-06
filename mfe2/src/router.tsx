import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { NotFoundPage } from './pages/NotFoundPage'
import { OrdersPage } from './pages/OrdersPage'
import { OverviewPage } from './pages/OverviewPage'
import { ProfilePage } from './pages/ProfilePage'
import { routeManifest } from './routeManifest'

const [, ordersRoute, profileRoute] = routeManifest.routes

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: ordersRoute.path, element: <OrdersPage /> },
      { path: profileRoute.path, element: <ProfilePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

export const createAppRouter = (basename: string = routeManifest.basePath) =>
  createBrowserRouter(routes, { basename })
