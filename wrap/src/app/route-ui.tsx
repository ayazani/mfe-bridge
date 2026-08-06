import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const getErrorMessage = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  }

  return error instanceof Error ? error.message : String(error)
}

export const RouterLoading = () => (
  <div className="wrap-layout" aria-busy="true">
    <aside className="wrap-sidebar">
      <div className="wrap-brand">
        <span className="wrap-brand-mark">MF</span>
        <span>
          <strong>MFE Bridge</strong>
          <small>Application shell</small>
        </span>
      </div>
    </aside>

    <main className="wrap-content">
      <div className="wrap-route-state" role="status">
        Загрузка маршрутов приложений...
      </div>
    </main>
  </div>
)

export const RouterError = () => {
  const error = useRouteError()

  return (
    <div className="wrap-route-state" role="alert">
      Не удалось загрузить маршруты: {getErrorMessage(error)}
    </div>
  )
}

export const NotFoundPage = () => (
  <div className="wrap-route-state">Страница не найдена</div>
)
