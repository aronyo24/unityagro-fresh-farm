import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { availableLanguages, translations, type Language } from "./translations";

type TranslationValue = string | { [key: string]: TranslationValue };

type PlaceholderValues = Record<string, string | number>;

interface I18nContextValue {
  language: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string, placeholders?: PlaceholderValues) => string;
  availableLanguages: typeof availableLanguages;
}

const STORAGE_KEY = "unityagro-language";
const DEFAULT_LANGUAGE: Language = "en";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && (value === "en" || value === "bn");

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) {
    return stored;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("bn")) {
    return "bn";
  }

  return DEFAULT_LANGUAGE;
};

const resolveTranslation = (
  language: Language,
  key: string
): TranslationValue | undefined => {
  const segments = key.split(".");
  let current: TranslationValue | undefined = translations[language];

  for (const segment of segments) {
    if (typeof current === "string") {
      return current;
    }

    current = current?.[segment];

    if (current === undefined) {
      return undefined;
    }
  }

  return current;
};

const applyPlaceholders = (value: string, placeholders?: PlaceholderValues) => {
  if (!placeholders) {
    return value;
  }

  return value.replace(/\{\{(.*?)\}\}/g, (_, token) => {
    const trimToken = String(token).trim();
    const replacement = placeholders[trimToken];
    return replacement !== undefined ? String(replacement) : `{{${trimToken}}}`;
  });
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const translate = useCallback(
    (key: string, placeholders?: PlaceholderValues) => {
      const value =
        resolveTranslation(language, key) ??
        resolveTranslation(DEFAULT_LANGUAGE, key) ??
        key;

      if (typeof value !== "string") {
        return key;
      }

      return applyPlaceholders(value, placeholders);
    },
    [language]
  );

  const changeLanguage = useCallback((next: Language) => {
    setLanguage(next);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      changeLanguage,
      t: translate,
      availableLanguages
    }),
    [language, changeLanguage, translate]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
};
