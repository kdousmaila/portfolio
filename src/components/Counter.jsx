import { useEffect, useRef, useState } from 'react'

export default function Counter({ target, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const step = Math.max(1, target / 30)
            let cur = 0
            const t = setInterval(() => {
              cur += step
              if (cur >= target) { cur = target; clearInterval(t) }
              setValue(Math.round(cur))
            }, 30)
          }
        })
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <b ref={ref}>{value}{suffix}</b>
}
