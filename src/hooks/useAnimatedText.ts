import { LegacyRef, useEffect, useRef, useState } from 'react'

const defaultOptions = {
  threshold: 0.5,
}

export const useAnimatedText = (
  className: string,
  options: IntersectionObserverInit = defaultOptions
) => {
  const elementRef: LegacyRef<HTMLDivElement> = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          entry.target.classList.add(className)
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
  }, [])

  return { elementRef, isInView }
}
