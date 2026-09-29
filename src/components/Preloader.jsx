import { useEffect, useState } from 'react'

const MODULES = [
  { name: 'home_interface.render' },
  { name: 'about_profile.render' },
  { name: 'education_timeline.render' },
  { name: 'experience_timeline.render' },
  { name: 'certifications.render' },
  { name: 'skills_stack.render' },
  { name: 'portfolio_projects.render' },
  { name: 'contact_form.render' }
]

export default function Preloader() {
  const [hide, setHide] = useState(false)
  const [progress, setProgress] = useState(0)
  const [verified, setVerified] = useState(Array(MODULES.length).fill(false))

  // Progression globale
  useEffect(() => {
    const start = Date.now()
    const duration = 3200 // durée totale en ms

    const t = setInterval(() => {
      const elapsed = Date.now() - start
      const p = Math.min(100, (elapsed / duration) * 100)
      setProgress(p)

      if (p >= 100) {
        clearInterval(t)
        setTimeout(() => setHide(true), 400)
      }
    }, 40)
    return () => clearInterval(t)
  }, [])

  // Valider chaque module l'un après l'autre
  useEffect(() => {
    MODULES.forEach((_, i) => {
      const delay = (i + 1) * (3200 / (MODULES.length + 2))
      setTimeout(() => {
        setVerified(v => {
          const copy = [...v]
          copy[i] = true
          return copy
        })
      }, delay)
    })
  }, [])

  return (
    <div id="preloader" className={hide ? 'hide' : ''}>
      {/* Titre type terminal */}
      <div className="pl-title">
        <span className="pl-bracket">[</span>
        Initializing portfolio
        <span className="pl-dots">
          <span>.</span><span>.</span><span>.</span>
        </span>
        <span className="pl-bracket">]</span>
        <span className="pl-title-pct">{Math.round(progress)}%</span>
      </div>

      {/* Grille des modules */}
      <div className="pl-grid">
        {MODULES.map((m, i) => (
          <div key={i} className={`pl-module ${verified[i] ? 'verified' : ''}`}>
            <span className="pl-module-corner tl" />
            <span className="pl-module-corner tr" />
            <span className="pl-module-corner bl" />
            <span className="pl-module-corner br" />

            <div className="pl-module-head">
              <span className="pl-module-name">{m.name}</span>
              <span className={`pl-module-badge ${verified[i] ? 'ok' : 'warn'}`}>
                {verified[i] ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    Warning
                  </>
                )}
              </span>
            </div>

            {/* Zone contenu placeholder */}
            <div className="pl-module-body">
              <div className="pl-module-lines">
                <span /><span /><span /><span />
              </div>
              {verified[i] && (
                <div className="pl-module-check">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Barre globale */}
      <div className="pl-global-bar">
        <div className="pl-global-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="pl-status">
        {progress < 100 ? (
          <>🟡 Scanning components...</>
        ) : (
          <>🟢 Access granted</>
        )}
      </div>
    </div>
  )
}