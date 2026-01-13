// Import static translation resources
import ar from '@/locales/ar/translation.json'
import en from '@/locales/en/translation.json'
import zh from '@/locales/zh/translation.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const savedLang = localStorage.getItem('i18n_lang') || ''
const browserLangRaw = (navigator.language || 'en').toLowerCase()
const browserLang = browserLangRaw.startsWith('zh') ? 'zh' : browserLangRaw.startsWith('ar') ? 'ar' : 'en'
const defaultLang = savedLang || browserLang

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: defaultLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
