import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { MemoryEntry, SupportedLanguage } from '../types'

interface MemoryDialogProps {
  entry: MemoryEntry
  onClose: () => void
}

export default function MemoryDialog({ entry, onClose }: MemoryDialogProps) {
  const { i18n, t } = useTranslation()
  const lang = i18n.language as SupportedLanguage
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, a, input, [tabindex]:not([tabindex="-1"])',
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="dialog-backdrop" role="presentation" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className="memory-dialog"
      >
        <button
          ref={closeRef}
          type="button"
          className="dialog-close"
          onClick={onClose}
          aria-label={t('close')}
        >
          ×
        </button>
        <div className="dialog-image-wrap">
          <img
            src={entry.imagePath}
            alt={entry.imageAlt[lang]}
            className="dialog-image"
            loading="lazy"
          />
        </div>
        <div className="dialog-body">
          <span className="dialog-year">{entry.year}</span>
          <h2 id="dialog-title" className="dialog-name">{entry.name}</h2>
          <p className="dialog-description">{entry.description[lang]}</p>
          {entry.tags && (
            <ul className="dialog-tags" aria-label="tags">
              {entry.tags.map((tag) => (
                <li key={tag} className="dialog-tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
