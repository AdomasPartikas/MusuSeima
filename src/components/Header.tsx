import { useTranslation } from 'react-i18next'
import type { SupportedLanguage } from '../types'

export default function Header() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language as SupportedLanguage

  function toggleLanguage() {
    const next: SupportedLanguage = currentLang === 'lt' ? 'en' : 'lt'
    void i18n.changeLanguage(next)
  }

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <a href="#main-content" className="skip-link">
          {currentLang === 'lt' ? 'Pereiti prie turinio' : 'Skip to content'}
        </a>
        <span className="site-name" aria-label={t('siteName')}>
          {t('siteName')}
        </span>
        <nav aria-label={t('language')}>
          <button
            type="button"
            className="lang-btn"
            onClick={toggleLanguage}
            aria-label={`${t('language')}: ${currentLang === 'lt' ? t('langEn') : t('langLt')}`}
          >
            {currentLang === 'lt' ? t('langEn') : t('langLt')}
          </button>
        </nav>
      </div>
    </header>
  )
}
