import type { SiteConfig } from '../types'

export const siteConfig: SiteConfig = {
    siteTitle: import.meta.env.VITE_SITE_TITLE || 'Musu Seima',
    driveArchiveUrl:
        import.meta.env.VITE_DRIVE_ARCHIVE_URL ||
        'https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID',
}
