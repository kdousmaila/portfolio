import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    let mouseX = 0, mouseY = 0
    let outlineX = 0, outlineY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.15
      outlineY += (mouseY - outlineY) * 0.15
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    const interactiveEls = document.querySelectorAll('a, button, .btn, input, textarea')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        dot.style.width = '12px'
        dot.style.height = '12px'
        outline.style.width = '60px'
        outline.style.height = '60px'
        outline.style.borderColor = 'rgba(245, 165, 36, 0.8)'
      })
      el.addEventListener('mouseleave', () => {
        dot.style.width = '6px'
        dot.style.height = '6px'
        outline.style.width = '36px'
        outline.style.height = '36px'
        outline.style.borderColor = 'rgba(245, 165, 36, 0.4)'
      })
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  )
}