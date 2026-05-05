import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer" role="contentinfo">
            <p className="footer-text">{t('footer')}</p>
            <p className="footer-copyright">© {year} {t('siteName')}</p>
        </footer>
    )
}
