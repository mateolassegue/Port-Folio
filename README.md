# Port-Folio

Portfolio professionnel d'ingénieur, bilingue (FR/EN) — Astro 5, Tailwind CSS 4, TypeScript, Chart.js.
Bilingual (FR/EN) engineer portfolio. Live: https://mateolassegue.github.io/Port-Folio/

> Astro 5 is used because the latest Astro (6+) requires Node ≥ 22, while this project targets Node 20.

## 🇫🇷 Français

### Lancer en local / Codespaces
```bash
npm install
npm run dev   # astro dev --host, port 4321
```
Dans GitHub Codespaces, le port 4321 est transféré automatiquement (`.devcontainer/devcontainer.json`) et `npm install` est lancé à la création. Site : `http://localhost:4321/Port-Folio/`.

### Ajouter un projet
Ajoutez un objet dans `src/data/projects.json` (champs `title`, `description`, `context`, `problem`, `solution`, `result` en `{fr,en}`, plus `stack`, `languages` (optionnel, % par techno), `image`, `demo`, `repo`, `showRepoLink`, `status`). Mettez `"showRepoLink": false` pour un dépôt privé. Le filtre et le graphique de compétences se mettent à jour automatiquement. Profil et parcours : `src/data/profile.json`.

### Ajouter une langue
1. Copier `src/i18n/fr.json` en `src/i18n/<code>.json` et traduire.
2. Déclarer la langue dans `src/i18n/utils.ts` (`languages`, `ui`) et dans `astro.config.mjs` (`i18n.locales`).
3. Ajouter `<code>` dans les champs `{fr,en}` de `projects.json` / `profile.json`, créer `src/pages/<code>/index.astro` (copie de `fr`), et ajouter le code dans la liste `supported` de `src/pages/index.astro`.

### Déployer sur GitHub Pages
Settings → Pages → Source : **GitHub Actions**. Chaque push sur `main` déclenche `.github/workflows/deploy.yml`.

## 🇬🇧 English

### Run locally / Codespaces
```bash
npm install
npm run dev   # astro dev --host, port 4321
```
In GitHub Codespaces port 4321 is forwarded automatically and `npm install` runs on creation. Site: `http://localhost:4321/Port-Folio/`.

### Add a project
Add an object to `src/data/projects.json` (`title`, `description`, `context`, `problem`, `solution`, `result` as `{fr,en}`, plus `stack`, optional `languages` (% per tech), `image`, `demo`, `repo`, `showRepoLink`, `status`). Use `"showRepoLink": false` for private repos. The filters and skills chart update automatically. Profile and timeline: `src/data/profile.json`.

### Add a language
1. Copy `src/i18n/fr.json` to `src/i18n/<code>.json` and translate it.
2. Register it in `src/i18n/utils.ts` (`languages`, `ui`) and `astro.config.mjs` (`i18n.locales`).
3. Add `<code>` keys to the `{fr,en}` fields in `projects.json` / `profile.json`, create `src/pages/<code>/index.astro` (copy of `fr`), and add the code to `supported` in `src/pages/index.astro`.

### Deploy to GitHub Pages
Settings → Pages → Source: **GitHub Actions**. Every push to `main` runs `.github/workflows/deploy.yml`.
