import { navbarHeightNum } from '../constants.ts'

export const scrollTo = (element: string) => {
  const elem = document.getElementById(element)
  if (elem) {
    const elemPosition = elem.getBoundingClientRect().top
    const offset = elemPosition + window.scrollY - remToPx(navbarHeightNum)
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}
export const remToPx = (rem: number) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}
