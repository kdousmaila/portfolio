import { useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'
import { skillCategories } from '../data.js'

function SkillCard({ cat }) {
  const Icon = cat.icon
  return (
    <div className="skill-card">
      <h4>
        <span className="skill-icon"><Icon /></span>
        <span>{cat.title}</span>
      </h4>
      <div className="chips">
        {cat.chips.map((c, i) => <span className="chip" key={i}>{c}</span>)}
      </div>
    </div>
  )
}

export default function Skills() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    let raf
    const step = () => {
      const wrap = wrapRef.current
      const track = trackRef.current
      if (wrap && track && !pausedRef.current) {
        posRef.current += 0.6
        if (posRef.current >= track.scrollWidth / 2) posRef.current = 0
        wrap.scrollLeft = posRef.current
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const scrollBy = (dir) => {
    const wrap = wrapRef.current
    if (!wrap) return
    pausedRef.current = true
    wrap.scrollBy({ left: dir * 280, behavior: 'smooth' })
    setTimeout(() => { pausedRef.current = false }, 3000)
  }

  const doubled = [...skillCategories, ...skillCategories]

  return (
    <section className="section" id="skills">
      {/* ⬇️ SUPPRIMÉ le titre extérieur ici */}
      
      <Reveal as="div" className="skills-container">
        <div className="skills-header">
          <div className="skills-header-title">
            {/* ⬇️ Titre À L'INTÉRIEUR du container */}
            <span className="skills-icon">{'</>'}</span>
            <span>Stack &amp; Tools</span>
          </div>
          <div className="skills-nav">
            <button className="skills-nav-btn" onClick={() => scrollBy(-1)} aria-label="Previous">‹</button>
            <button className="skills-nav-btn" onClick={() => scrollBy(1)} aria-label="Next">›</button>
          </div>
        </div>

        <div className="skill-track-wrap" ref={wrapRef}>
          <div className="skill-grid" ref={trackRef}>
            {doubled.map((cat, i) => <SkillCard cat={cat} key={i} />)}
          </div>
        </div>
      </Reveal>
    </section>
  )
}