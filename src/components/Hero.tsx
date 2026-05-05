import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/site'
import memories from '../data/memories.json'

export default function Hero() {
    const { t } = useTranslation()
    const heroSlides = useMemo(() => memories.slice(0, 5).map((entry) => entry.imagePath), [])
    const [failedSlides, setFailedSlides] = useState<Record<string, true>>({})
    const availableSlides = heroSlides.filter((slide) => !failedSlides[slide])
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        if (availableSlides.length <= 1) {
            setActiveSlide(0)
            return
        }

        const timer = window.setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % availableSlides.length)
        }, 5000)

        return () => window.clearInterval(timer)
    }, [availableSlides.length])

    function markSlideAsFailed(src: string) {
        setFailedSlides((prev) => ({ ...prev, [src]: true }))
    }

    return (
        <section className="hero" aria-labelledby="hero-title">
            {availableSlides.length > 0 ? (
                <div className="hero-slideshow" aria-hidden="true">
                    {availableSlides.map((slide, index) => (
                        <img
                            key={slide}
                            src={slide}
                            alt=""
                            className={`hero-slide${index === activeSlide ? ' is-active' : ''}`}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            onError={() => markSlideAsFailed(slide)}
                        />
                    ))}
                    <div className="hero-overlay" />
                </div>
            ) : null}
            <div className="hero-inner">
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
                            <path d="M12 2L4 7l8 5 8-5-8-5z" fill="currentColor" opacity=".8" />
                            <path d="M4 17l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <path d="M4 12l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
