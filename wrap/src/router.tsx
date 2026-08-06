import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import Mfe1 from './remotes/Mfe1'
import Mfe2 from './remotes/Mfe2'
import { WrapHome } from './WrapHome'
import { WrapLayout } from './WrapLayout'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <WrapLayout />,
    children: [
      { index: true, element: <WrapHome /> },
      { path: 'mfe1/*', element: <Mfe1 /> },
      { path: 'mfe2/*', element: <Mfe2 /> },
    ],
  },
]

export const router = createBrowserRouter(routes)
