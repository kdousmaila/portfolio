import photo from '../assets/photo.jpg'
import Reveal from './Reveal.jsx'
import Counter from './Counter.jsx'
import { stats } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <Reveal as="h2" className="title">
        <span className="b">&lt;</span> About Me <span className="b">/&gt;</span>
      </Reveal>
      <Reveal className="about-grid">
        <div className="about-ring"><img src={photo} alt="Maila Kdous" /></div>
        <div className="about-txt">
          <div className="about-lead">
            Between <b>code</b> and <b>artificial intelligence</b>, I build solutions that simplify everyday work.
          </div>
          <p>
           I'm currently completing my engineering degree in Software Engineering and Information Systems, where I've developed solid full-stack skills — front-end with React and Angular, back-end with ASP.NET, Spring Boot and Node.js.
          </p>
          <p>
       What drives me is combining that foundation with AI: integrating it in ways that genuinely improve the user experience, not just as a feature to check off. I'm currently looking for an internship where I can keep building on that.
          </p>
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <Counter target={s.count} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
