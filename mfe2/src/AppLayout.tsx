import { NavLink, Outlet } from 'react-router-dom'

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link'

export const AppLayout = () => (
  <div className="app-shell">
    <header className="app-header">
      <strong>MFE 2</strong>
      <nav aria-label="Навигация MFE 2">
        <NavLink className={getLinkClassName} to="" end>
          Обзор
        </NavLink>
        <NavLink className={getLinkClassName} to="orders">
          Заказы
        </NavLink>
        <NavLink className={getLinkClassName} to="profile">
          Профиль
        </NavLink>
      </nav>
    </header>

    <main className="page-container">
      <Outlet />
    </main>
  </div>
)
