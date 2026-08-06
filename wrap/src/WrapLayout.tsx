import { NavLink, Outlet } from 'react-router-dom'
import { createMenuGroups } from './menuConfig'
import type { RemoteRouteManifest } from './remoteRouteTypes'
import { RemoteRoutesProvider } from './RemoteRoutesContext'
import { useRemoteRoutes } from './useRemoteRoutes'

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'wrap-menu-link wrap-menu-link--active' : 'wrap-menu-link'

const WrapMenu = () => {
  const { status, manifests } = useRemoteRoutes()

  if (status === 'loading') {
    return <div className="wrap-menu-state">Загрузка меню...</div>
  }

  if (status === 'error') {
    return <div className="wrap-menu-state">Меню приложений недоступно</div>
  }

  return createMenuGroups(manifests).map((group) => (
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
  ))
}

const WrapLayoutContent = () => (
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

        <WrapMenu />
      </nav>
    </aside>

    <div className="wrap-content">
      <Outlet />
    </div>
  </div>
)

type WrapLayoutProps = {
  manifests: readonly RemoteRouteManifest[]
}

export const WrapLayout = ({ manifests }: WrapLayoutProps) => (
  <RemoteRoutesProvider manifests={manifests}>
    <WrapLayoutContent />
  </RemoteRoutesProvider>
)
