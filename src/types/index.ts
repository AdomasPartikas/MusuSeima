export type SupportedLanguage = 'lt' | 'en'

export interface LocalizedText {
    lt: string
    en: string
}

export interface MemoryEntry {
    id: string
    name: string
    year: number
    description: LocalizedText
    imagePath: string
    imageAlt: LocalizedText
    tags?: string[]
}

export interface SiteConfig {
    siteTitle: string
    driveArchiveUrl: string
}
