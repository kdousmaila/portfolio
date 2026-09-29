import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal as="h2" className="title">
        <span className="b">&lt;</span> Professional Experience <span className="b">/&gt;</span>
      </Reveal>
      <Reveal className="timeline stagger">
        {experience.map((e, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-date">{e.date}</div>
            <h4>{e.title}</h4>
            <div className="org">
              <svg className="org-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
              </svg>
              {e.org}
            </div>
            {e.tags && e.tags.length > 0 && (
              <div className="tl-tags">
                {e.tags.map((t, j) => <span className="pill" key={j}>{t}</span>)}
              </div>
            )}
            <ul>
              {e.bullets.map((b, k) => <li key={k}>{b}</li>)}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  )
}