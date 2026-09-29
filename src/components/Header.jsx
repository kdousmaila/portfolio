import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="brand">
  <img src={logo} alt="MK Logo" className="brand-logo" />
          <div className="brand-txt"><b>Maila Kdous</b><span>SOFTWARE ENGINEER</span></div>
        </div>
        <div className="navlinks">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>{l.label}</a>
          ))}
        </div>
        <a className="btn btn-primary" href="#contact">Contact Me →</a>
        <button id="navToggle" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>☰</button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </header>
  )
}
