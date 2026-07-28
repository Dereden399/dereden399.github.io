// `offset` clears any sticky header above the target — 24 on desktop, the mobile
// bar height below `lg`.
export const scrollToId = (id: string, offset = 24): void => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
