import { NavLink, Outlet } from 'react-router-dom'

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link'

export const AppLayout = () => (
  <div className="app-shell mfe1-app">
    <header className="app-header">
      <strong>MFE 1</strong>
      <nav aria-label="Навигация MFE 1">
        <NavLink className={getLinkClassName} to="" end>
          Главная
        </NavLink>
        <NavLink className={getLinkClassName} to="catalog">
          Каталог
        </NavLink>
        <NavLink className={getLinkClassName} to="settings">
          Настройки
        </NavLink>
      </nav>
    </header>

    <main className="page-container">
      <Outlet />
    </main>
  </div>
)
