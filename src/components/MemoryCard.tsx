import type { MemoryEntry, SupportedLanguage } from '../types'
import { useTranslation } from 'react-i18next'

interface MemoryCardProps {
    entry: MemoryEntry
    onSelect: (entry: MemoryEntry) => void
}

export default function MemoryCard({ entry, onSelect }: MemoryCardProps) {
    const { i18n, t } = useTranslation()
    const lang = i18n.language as SupportedLanguage

    function handleInteraction(e: React.MouseEvent | React.KeyboardEvent) {
        if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return
        if ('key' in e) e.preventDefault()
        onSelect(entry)
    }

    return (
        <article
            className="memory-card"
            role="button"
            tabIndex={0}
            aria-label={`${t('openMemory')}: ${entry.name}, ${entry.year}`}
            onClick={handleInteraction}
            onKeyDown={handleInteraction}
        >
            <div className="card-image-wrap">
                <img
                    src={entry.imagePath}
                    alt={entry.imageAlt[lang]}
                    className="card-image"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    onError={(e) => {
                        ; (e.currentTarget as HTMLImageElement).src = '/images/placeholder.svg'
                    }}
                />
                <div className="card-overlay" aria-hidden="true">
                    <span className="card-overlay-icon">+</span>
                </div>
            </div>
            <div className="card-info">
                <span className="card-year">{entry.year}</span>
                <h3 className="card-name">{entry.name}</h3>
            </div>
        </article>
    )
}
