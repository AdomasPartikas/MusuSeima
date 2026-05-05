import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/site'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80" aria-hidden="true">
            <circle cx="32" cy="32" r="32" fill="var(--accent-soft)" />
            <path d="M20 44c0-7 5.4-12 12-12s12 5 12 12" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="25" r="7" stroke="var(--accent)" strokeWidth="2.5" />
            <path d="M14 26c0-5 3.8-9 8.5-9" stroke="var(--accent-muted)" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 26c0-5-3.8-9-8.5-9" stroke="var(--accent-muted)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h1 id="hero-title" className="hero-title">
          {t('heroTitle')}
        </h1>
        <p className="hero-subtitle">{t('heroSubtitle')}</p>
        <div className="hero-cta-wrapper">
          <a
            href={siteConfig.driveArchiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            aria-describedby="cta-hint"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L4 7l8 5 8-5-8-5z" fill="currentColor" opacity=".8"/>
              <path d="M4 17l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M4 12l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            {t('openArchive')}
          </a>
          <p id="cta-hint" className="cta-hint">
            {t('archiveHint')}
          </p>
        </div>
      </div>
    </section>
  )
}
