import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <section className="page-card">
    <span className="page-label">404</span>
    <h1>Страница не найдена</h1>
    <p>Такого маршрута в MFE 1 нет.</p>
    <Link className="back-link" to="/">
      Вернуться на главную
    </Link>
  </section>
)
