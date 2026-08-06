export type MenuItem = {
  label: string
  to: string
  end?: boolean
}

export type MenuGroup = {
  id: 'mfe1' | 'mfe2'
  label: string
  accent: 'blue' | 'green'
  items: MenuItem[]
}

export const menuGroups: MenuGroup[] = [
  {
    id: 'mfe1',
    label: 'MFE 1',
    accent: 'blue',
    items: [
      { label: 'Главная', to: '/mfe1', end: true },
      { label: 'Каталог', to: '/mfe1/catalog' },
      { label: 'Настройки', to: '/mfe1/settings' },
    ],
  },
  {
    id: 'mfe2',
    label: 'MFE 2',
    accent: 'green',
    items: [
      { label: 'Обзор', to: '/mfe2', end: true },
      { label: 'Заказы', to: '/mfe2/orders' },
      { label: 'Профиль', to: '/mfe2/profile' },
    ],
  },
]
