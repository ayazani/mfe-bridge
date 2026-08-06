import { Link } from 'react-router-dom'

export const WrapHome = () => (
  <main className="wrap-container">
    <section className="wrap-card">
      <span className="wrap-label">Wrap</span>
      <h1>Выберите приложение</h1>
      <p>Оболочка загружает микрофронтенды через Module Federation.</p>

      <div className="wrap-apps">
        <Link className="wrap-app-link wrap-app-link--blue" to="/mfe1">
          <strong>MFE 1</strong>
          <span>Главная, каталог и настройки</span>
        </Link>
        <Link className="wrap-app-link wrap-app-link--green" to="/mfe2">
          <strong>MFE 2</strong>
          <span>Обзор, заказы и профиль</span>
        </Link>
      </div>
    </section>
  </main>
)
