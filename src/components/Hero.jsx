import { useEffect, useRef, useState } from 'react'
import photo from '../assets/photo.jpg'
import cv from '../assets/CV_Maila_Kdous.pdf'
import { roles, workingWith } from '../data.js'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [activeCat, setActiveCat] = useState(null)
  const stateRef = useRef({ ri: 0, ci: 0, deleting: false })

  useEffect(() => {
    let timeout
    const tick = () => {
      const s = stateRef.current
      const word = roles[s.ri].text
      if (!s.deleting) {
        s.ci++
        setTyped(word.slice(0, s.ci))
        if (s.ci === word.length) {
          setActiveCat(roles[s.ri].cat)
          s.deleting = true
          timeout = setTimeout(tick, 1500)
          return
        }
      } else {
        s.ci--
        setTyped(word.slice(0, s.ci))
        if (s.ci === 0) {
          s.deleting = false
          s.ri = (s.ri + 1) % roles.length
          setActiveCat(null)
        }
      }
      timeout = setTimeout(tick, s.deleting ? 30 : 60)
    }
    tick()
    return () => clearTimeout(timeout)
  }, [])

  const downloadCv = async e => {
    e.preventDefault()
    try {
      const res = await fetch(cv)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'CV_Maila_Kdous.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      window.open(cv, '_blank')
    }
  }

  return (
    <section className="hero" id="home">
      {/* COLONNE GAUCHE : Texte */}
      <div className="hero-text">
        <div className="badge"><span className="dot" /> Open to internship opportunities</div>
        <div className="subbadge">· Internship · Full-time</div>
        <h1>Maila Kdous</h1>
        <h3>I'm {typed}<span className="cursor">&nbsp;</span></h3>
        <p>
          Software Engineer specializing in full-stack web development with a strong interest in
          artificial intelligence. I design and build complete solutions, from backend to frontend,
          using Agile/Scrum methodology.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#about">Learn more</a>
          <button className="btn btn-ghost" onClick={downloadCv}>Download CV ↓</button>
        </div>
      </div>

      {/* COLONNE CENTRE : Photo */}
      <div className="photo-wrap">
        <div className="photo-glow" />
        <div className="spin-ring">
          <img className="photo" src={photo} alt="Maila Kdous" />
        </div>
      </div>

      {/* COLONNE DROITE : Chips */}
      <div className="working-with">
        <span className="ww-label mono">Currently working with:</span>
        <div className="ww-row">
          {workingWith.map((w, i) => (
            <div key={i} className={`ww-chip ${activeCat && w.cat === activeCat ? 'hl' : ''}`}>
              {w.icon && <img src={w.icon} alt={w.label} />}
              <span>{w.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}