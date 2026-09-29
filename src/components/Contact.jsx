import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const submit = e => {
    e.preventDefault()
    setStatus('sending')

    emailjs.send(
      'service_k8itd5s',
      'template_z78r03i',
      { name, email, title: subject || 'Portfolio contact', message },
      'uN-tB2PezwHxaqFUo'
    )
      .then(() => {
        setStatus('success')
        setName(''); setEmail(''); setSubject(''); setMessage('')
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="section" id="contact">
      <Reveal as="h2" className="title">
        <span className="b">&lt;</span> Contact <span className="b">/&gt;</span>
      </Reveal>
      <Reveal className="contact-grid">
        <div className="contact-box">
          <h2>Let's talk about your next project</h2>
          <p>Open to internship, apprenticeship or full-time opportunities. I usually reply within 24–48h.</p>
          <div className="contact-links">
            <a href="mailto:mailakdous2@gmail.com">✉ mailakdous2@gmail.com</a>
            <a href="tel:+21650804888">☎ +216 50 804 888</a>
            <a href="#">📍 Ariana, Tunisia</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h3>Send me a message</h3>
          <input type="text" placeholder="Your name" required value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email address" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
          <textarea rows={4} maxLength={800} placeholder="Your message" required value={message} onChange={e => setMessage(e.target.value)} />
          <div className="msg-count">{message.length}/800</div>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi...' : 'Send message →'}
          </button>
          {status === 'success' && <p className="form-msg success">Message envoyé ✓</p>}
          {status === 'error' && <p className="form-msg error">Erreur, réessaie ou écris-moi directement.</p>}
        </form>
      </Reveal>
    </section>
  )
}