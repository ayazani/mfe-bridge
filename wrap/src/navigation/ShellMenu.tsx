import { NavLink } from 'react-router-dom'
import type { RemoteRouteManifest } from '../remotes/types'
import { createMenuGroups, getMenuLinkClassName } from './menu-model'

type ShellMenuProps = {
  manifests: readonly RemoteRouteManifest[]
}

export const ShellMenu = ({ manifests }: ShellMenuProps) =>
  createMenuGroups(manifests).map((group) => (
    <section
      className="wrap-menu-group"
      data-accent={group.accent}
      key={group.id}
    >
      <h2>{group.label}</h2>
      <div className="wrap-menu-items">
        {group.items.map((item) => (
          <NavLink
            className={getMenuLinkClassName}
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
