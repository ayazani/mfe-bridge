export const routeManifest = {
  id: 'mfe2',
  label: 'MFE 2',
  basePath: '/mfe2',
  accent: 'green',
  routes: [
    { id: 'overview', label: 'Обзор', path: '' },
    { id: 'orders', label: 'Заказы', path: 'orders' },
    { id: 'profile', label: 'Профиль', path: 'profile' },
  ],
} as const
