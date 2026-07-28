export const scrollToId = (id: string): void => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - 24
  window.scrollTo({ top, behavior: 'smooth' })
}
