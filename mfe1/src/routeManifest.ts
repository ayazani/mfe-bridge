export const routeManifest = {
  id: 'mfe1',
  label: 'MFE 1',
  basePath: '/mfe1',
  accent: 'blue',
  routes: [
    { id: 'home', label: 'Главная', path: '' },
    { id: 'catalog', label: 'Каталог', path: 'catalog' },
    { id: 'settings', label: 'Настройки', path: 'settings' },
  ],
} as const
