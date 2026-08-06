type MfeLoadingFallbackProps = {
  appName: string
  accent: 'blue' | 'green'
}

export const MfeLoadingFallback = ({
  appName,
  accent,
}: MfeLoadingFallbackProps) => (
  <div
    aria-busy="true"
    aria-label={`Загрузка ${appName}`}
    className="mfe-loading"
    data-accent={accent}
    role="status"
  >
    <header className="mfe-loading-header">
      <strong>{appName}</strong>
      <div className="mfe-loading-nav" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </header>

    <main className="mfe-loading-container">
      <section className="mfe-loading-card" aria-hidden="true">
        <span className="mfe-loading-line mfe-loading-line--label" />
        <span className="mfe-loading-line mfe-loading-line--title" />
        <span className="mfe-loading-line mfe-loading-line--text" />
      </section>
    </main>
  </div>
)
