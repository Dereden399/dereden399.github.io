import { ref, watchEffect, type Ref } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const media =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null

const systemTheme = (): Theme => (media?.matches ? 'dark' : 'light')

const readStored = (): Theme => {
  const system = systemTheme()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      if (
        saved.system === system &&
        (saved.theme === 'light' || saved.theme === 'dark')
      )
        return saved.theme
    }
  } catch {
    // oh no
  }
  return system
}

const theme = ref<Theme>(readStored())

media?.addEventListener('change', () => {
  theme.value = systemTheme()
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // gonna cry?
  }
})

watchEffect(() => {
  const root = document.documentElement
  root.classList.toggle('dark', theme.value === 'dark')
  root.style.colorScheme = theme.value
})

const toggleTheme = (): void => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ theme: theme.value, system: systemTheme() })
    )
  } catch {}
}

export const useTheme = (): {
  theme: Ref<Theme>
  toggleTheme: () => void
} => ({ theme, toggleTheme })
