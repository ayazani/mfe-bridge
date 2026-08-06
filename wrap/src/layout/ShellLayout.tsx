import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { getMenuLinkClassName } from '../navigation/menu-model'
import { ShellMenu } from '../navigation/ShellMenu'
import type { RemoteManifests } from '../remotes/load-manifests'

export const ShellLayout = () => {
  const manifests = useLoaderData() as RemoteManifests

  return (
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
          <NavLink className={getMenuLinkClassName} to="/" end>
            Главная оболочки
          </NavLink>

          <ShellMenu manifests={manifests} />
        </nav>
      </aside>

      <div className="wrap-content">
        <Outlet />
      </div>
    </div>
  )
}
