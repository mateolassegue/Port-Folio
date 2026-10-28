import fr from "./fr.json";
import en from "./en.json";

export const languages = { fr: "Français", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "fr";

const ui: Record<Lang, any> = { fr, en };

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const [, lang] = path.split("/");
  return isLang(lang) ? lang : defaultLang;
}

/** Translate a dotted key, e.g. t("fr", "hero.cta"). Falls back to default language. */
export function t(lang: Lang, key: string): string {
  const find = (l: Lang) => key.split(".").reduce<any>((o, k) => o?.[k], ui[l]);
  const value = find(lang) ?? find(defaultLang);
  return typeof value === "string" ? value : key;
}

/** Pick the localized value of a {fr,en} field. */
export function tr<T = string>(field: Record<string, T>, lang: Lang): T {
  return field[lang] ?? field[defaultLang];
}

/** Build a URL that respects Astro's `base`. */
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export function localizedUrl(lang: Lang, hash = ""): string {
  return `${url(`${lang}/`)}${hash}`;
}
