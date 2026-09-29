import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import planoraVideo from '../assets/planora.mp4'
import ArchFlowVideo from '../assets/archflow.mp4'
import rh1 from '../assets/rh/rh1.jpg'
import rh2 from '../assets/rh/rh2.jpg'
import rh3 from '../assets/rh/rh3.jpg'
import rh4 from '../assets/rh/rh4.jpg'
import rh5 from '../assets/rh/rh5.jpg'
import rh6 from '../assets/rh/rh6.jpg'
import rh7 from '../assets/rh/rh7.jpg'
import rh8 from '../assets/rh/rh8.jpg'
import rv1 from '../assets/rv/rv1.jpg'
import rv2 from '../assets/rv/rv2.jpg'
import rv3 from '../assets/rv/rv3.jpg'
import rv4 from '../assets/rv/rv4.jpg'
import rv5 from '../assets/rv/rv5.jpg'
import rv6 from '../assets/rv/rv6.jpg'
import rv7 from '../assets/rv/rv7.jpg'
import rv8 from '../assets/rv/rv8.jpg'
import rv9 from '../assets/rv/rv9.jpg'
import rv10 from '../assets/rv/rv10.jpg'
import rv11 from '../assets/rv/rv11.jpg'

const rhImages = [rh1, rh2, rh3, rh4, rh5, rh6, rh7, rh8]
const rvImages = [rv1, rv2, rv3, rv4, rv5, rv6, rv7, rv8, rv9, rv10, rv11]

function AutoGallery({ images, intervalMs, onOpen }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), intervalMs)
    return () => clearInterval(t)
  }, [images.length, intervalMs])
  return (
    <div className="proj-media">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={i === idx ? 'active' : ''}
          alt=""
          onClick={() => onOpen(images, idx)}
        />
      ))}
    </div>
  )
}

function Lightbox({ gallery, index, onClose, onNav }) {
  if (!gallery) return null
  const item = gallery[index]
  const isVideo = typeof item === 'object' && item.type === 'video'

  return (
    <div className="lightbox open" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <button className="lb-close" onClick={onClose}>✕</button>
      <button className="lb-prev" onClick={() => onNav(-1)}>‹</button>
      {isVideo ? (
        <video
          src={item.src}
          controls
          autoPlay
          loop
          muted
          playsInline
          className="lb-video"
        />
      ) : (
        <img src={item} alt="" />
      )}
      <button className="lb-next" onClick={() => onNav(1)}>›</button>
    </div>
  )
}

export default function Projects() {
  const [lb, setLb] = useState({ gallery: null, index: 0 })

  const openLb = (gallery, index) => setLb({ gallery, index })
  const closeLb = () => setLb({ gallery: null, index: 0 })
  const navLb = dir => setLb(s => ({ ...s, index: (s.index + dir + s.gallery.length) % s.gallery.length }))

  useEffect(() => {
    const onKey = e => {
      if (!lb.gallery) return
      if (e.key === 'Escape') closeLb()
      if (e.key === 'ArrowRight') navLb(1)
      if (e.key === 'ArrowLeft') navLb(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lb])

  return (
    <section className="section" id="projects">
      <Reveal as="h2" className="title">
        <span className="b">&lt;</span> Featured Projects <span className="b">/&gt;</span>
      </Reveal>
      <Reveal className="proj-grid">
        <div className="proj">
          <div className="proj-media">
<video
  src={planoraVideo}
  muted
  loop
  playsInline
  autoPlay
  style={{ position: 'static', opacity: 1, cursor: 'pointer' }}
  onClick={() => openLb([{ type: 'video', src: planoraVideo }], 0)}
/>
          </div>
          <div className="proj-body">
            <h3>Planora</h3>
            <div className="proj-org">Personal project — AI-powered Agile/Scrum project management</div>
            <p>Collaborative platform: Product Backlog, User Stories, sprints, Kanban board, real-time chat with a
              contextual AI chatbot, video conferencing, and AI-based team well-being analysis.</p>
            <div className="proj-tags">
              <span className="pill">ASP.NET MVC</span><span className="pill">Angular</span><span className="pill">Python</span>
            </div>
            <div className="proj-actions">
              <a className="btn btn-primary btn-sm" href="https://github.com/kdousmaila/planora-project-management" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>

        <div className="proj">
          <AutoGallery images={rhImages} intervalMs={2800} onOpen={openLb} />
          <div className="proj-body">
            <h3>RhProject</h3>
            <div className="proj-org">TIS Circuits — Job descriptions &amp; annual review management</div>
            <p>HR web solution digitalizing employee tracking, with role management, review workflows and a
              decision-making dashboard.</p>
            <div className="proj-tags">
              <span className="pill">ASP.NET MVC</span><span className="pill">C#</span><span className="pill">SQL Server</span>
            </div>
            <div className="proj-actions">
              <a className="btn btn-primary btn-sm" href="https://github.com/kdousmaila/RHproject" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>

        <div className="proj">
          <AutoGallery images={rvImages} intervalMs={2600} onOpen={openLb} />
          <div className="proj-body">
            <h3>RHVision (ERP-RH)</h3>
            <div className="proj-org">IBH web consulting — Employee &amp; HR management ERP</div>
            <p>Full HR ERP: employee records, roles &amp; permissions, job offers with AI-generated descriptions,
              training management, leave requests and an HR assistant chatbot.</p>
            <div className="proj-tags">
              <span className="pill">Spring Boot</span><span className="pill">Angular</span><span className="pill">MongoDB</span>
            </div>
            <div className="proj-actions">
              <a className="btn btn-primary btn-sm" href="https://github.com/kdousmaila/RHVision" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>

        <div className="proj">
<div className="proj-media">
  <video
    src={ArchFlowVideo}
    muted
    loop
    playsInline
    autoPlay
    style={{ position: 'static', opacity: 1, cursor: 'pointer' }}
    onClick={() => openLb([{ type: 'video', src: ArchFlowVideo }], 0)}
  />
</div> <div className="proj-body">
            <h3>ArchFlow</h3>
            <div className="proj-org">Beta — Architectural project management platform</div>
            <p>Full-stack platform connecting clients, architects and suppliers around a role-based workflow, with
              AI-assisted quotes, messaging, site tracking and integrated video conferencing.</p>
            <div className="proj-tags">
              <span className="pill">ASP.NET Core</span><span className="pill">React</span><span className="pill">Python</span>
            </div>
            <div className="proj-actions">
              <a className="btn btn-primary btn-sm" href="https://github.com/kdousmaila/ArchiTrack" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
      </Reveal>

      <Lightbox gallery={lb.gallery} index={lb.index} onClose={closeLb} onNav={navLb} />
    </section>
  )
}
