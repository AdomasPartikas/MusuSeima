import { useState, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import type { MemoryEntry } from '../types'
import memoriesData from '../data/memories.json'
import MemoryCard from './MemoryCard'

const MemoryDialog = lazy(() => import('./MemoryDialog'))

export default function MemorySpotlight() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<MemoryEntry | null>(null)
  const memories = memoriesData as MemoryEntry[]

  return (
    <section
      id="spotlight"
      className="spotlight-section"
      aria-labelledby="spotlight-title"
    >
      <div className="spotlight-inner">
        <h2 id="spotlight-title" className="spotlight-title">
          {t('spotlightTitle')}
        </h2>
        <p className="spotlight-subtitle">{t('spotlightSubtitle')}</p>
        <div className="card-grid">
          {memories.map((entry) => (
            <MemoryCard key={entry.id} entry={entry} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <Suspense fallback={null}>
          <MemoryDialog entry={selected} onClose={() => setSelected(null)} />
        </Suspense>
      )}
    </section>
  )
}
