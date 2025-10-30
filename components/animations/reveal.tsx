'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

type Props = {
  children: React.ReactNode
  y?: number
  delay?: number
  stagger?: number
  once?: boolean
  className?: string
}

/**
 * Envuelve una fila/grilla. Revela a sus hijos en scroll con stagger.
 */
export default function Reveal({
  children,
  y = 24,
  delay = 0,
  stagger = 0.12,
  once = true,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.children)

    gsap.set(items, { opacity: 0, y })
    gsap.to(items, {
      opacity: 1,
      y: 0,
      ease: 'power3.out',
      duration: 0.6,
      stagger,
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
    })
  }, [])

  return <div ref={ref} className={className}>{children}</div>
}
