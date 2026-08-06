import { NavLink, Outlet } from 'react-router-dom'
import { menuGroups } from './menuConfig'

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'wrap-menu-link wrap-menu-link--active' : 'wrap-menu-link'

export const WrapLayout = () => (
  <div className="wrap-layout">
    <aside className="wrap-sidebar">
      <NavLink className="wrap-brand" to="/">
        <span className="wrap-brand-mark">MF</span>
        <span>
          <strong>MFE Bridge</strong>
          <small>Application shell</small>
        </span>
      </NavLink>

      <nav className="wrap-menu" aria-label="Навигация по микрофронтендам">
        <NavLink className={getLinkClassName} to="/" end>
          Главная оболочки
        </NavLink>

        {menuGroups.map((group) => (
          <section
            className="wrap-menu-group"
            data-accent={group.accent}
            key={group.id}
          >
            <h2>{group.label}</h2>
            <div className="wrap-menu-items">
              {group.items.map((item) => (
                <NavLink
                  className={getLinkClassName}
                  end={item.end}
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </section>
        ))}
      </nav>
    </aside>

    <div className="wrap-content">
      <Outlet />
    </div>
  </div>
)
