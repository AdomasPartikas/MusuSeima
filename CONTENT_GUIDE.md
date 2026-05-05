# 📷 Kaip pridėti prisiminimą / How to Add a Memory

This file explains how to update the website's memory entries without coding knowledge.  
Šis failas paaiškina, kaip atnaujinti svetainės prisiminimus be programavimo žinių.

---

## 1. Add a photo / Pridėkite nuotrauką

1. Resize your photo to roughly **800 × 600 px** or smaller. Smaller = faster site.
2. Save it as a `.jpg` or `.webp` file with a clear name, e.g. `vasara-2023.jpg`.
3. Place it in: `public/images/memories/`

---

## 2. Edit the content file / Redaguokite turinio failą

Open `src/data/memories.json` in any text editor (Notepad, VS Code, etc.).

Add a new entry at the **end of the list**, just before the closing `]`:

```json
  {
    "id": "mem-011",
    "name": "Person or event name / Žmogaus ar renginio vardas",
    "year": 2025,
    "description": {
      "lt": "Trumpas aprašymas lietuviškai (iki 200 simbolių).",
      "en": "Short description in English (up to 200 characters)."
    },
    "imagePath": "/images/memories/vasara-2023.jpg",
    "imageAlt": {
      "lt": "Aprašymas neregiai (pvz.: Šeima paplūdimyje saulei leidžiantis)",
      "en": "Alt text for screen readers (e.g.: Family at the beach at sunset)"
    },
    "tags": ["vasara", "sode"]
  }
```

**Important:** Make sure there is a comma `,` after the previous entry's closing `}`.

### Field guide / Laukų aprašymas

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Unique ID — increment by 1 each time |
| `name` | ✅ | Name of person or event |
| `year` | ✅ | Year the photo was taken |
| `description.lt` | ✅ | Description in Lithuanian |
| `description.en` | ✅ | Description in English |
| `imagePath` | ✅ | Path to the image (starts with `/images/memories/`) |
| `imageAlt.lt` | ✅ | Lithuanian alt text for accessibility |
| `imageAlt.en` | ✅ | English alt text for accessibility |
| `tags` | Optional | Array of lowercase tags for context |

---

## 3. Save and push / Išsaugokite ir nusiųskite

After saving the JSON file, commit and push to `main`.  
The site will update automatically within a few minutes via GitHub Actions.

---

## Tips / Patarimai

- Keep descriptions short — roughly **1–3 sentences**.
- Always fill in both `lt` and `en` — visitors can switch languages.
- Good alt text helps visually impaired family members. Describe **what's in the photo**, not just "photo of family".
- Use `.webp` format for smaller file sizes if possible.
