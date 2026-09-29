import Reveal from './Reveal.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <section className="section" id="education">
      <Reveal as="h2" className="title">
        <span className="b">&lt;</span> Academic Background <span className="b">/&gt;</span>
      </Reveal>
      <Reveal className="timeline stagger">
        {education.map((e, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-date">{e.date}</div>
            <h4>{e.title}</h4>
            <div className="org">{e.org}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
