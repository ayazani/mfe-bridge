import { Link, useRouteLoaderData } from 'react-router-dom'
import { SHELL_ROUTE_ID } from '../app/route-ids'
import type { RemoteManifests } from '../remotes/load-manifests'

export const HomePage = () => {
  const manifests = useRouteLoaderData(SHELL_ROUTE_ID) as RemoteManifests

  return (
    <main className="wrap-container">
      <section className="wrap-card">
        <span className="wrap-label">Wrap</span>
        <h1>Выберите приложение</h1>
        <p>Оболочка загружает микрофронтенды через Module Federation.</p>

        <div className="wrap-apps">
          {manifests.map((manifest) => (
            <Link
              className={`wrap-app-link wrap-app-link--${manifest.accent}`}
              key={manifest.id}
              to={manifest.basePath}
            >
              <strong>{manifest.label}</strong>
              <span>{manifest.routes.map((route) => route.label).join(', ')}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
