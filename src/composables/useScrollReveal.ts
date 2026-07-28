type ScrollRevealTarget = Element | { $el: Element } | null

export const useScrollReveal = (): {
  // eslint-disable-next-line no-unused-vars
  setTarget: (target: ScrollRevealTarget) => void
} => {
  let observer: IntersectionObserver | null = null

  const setTarget = (target: ScrollRevealTarget): void => {
    observer?.disconnect()
    observer = null
    if (!target) return
    const el = target instanceof Element ? target : target.$el
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer?.disconnect()
        }
      },
      { threshold: 0.07 }
    )
    observer.observe(el)
  }

  return { setTarget }
}
