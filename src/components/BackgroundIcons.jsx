import { useEffect } from 'react'

const icons = [
  // .NET
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', size: 'lg', style: { top: '8%', left: '6%' } },
  // React
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', size: 'lg', style: { top: '14%', right: '10%' } },
  // Node.js
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', size: 'md', style: { top: '30%', right: '22%' } },
  // Spring Boot
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', size: 'lg', style: { top: '40%', left: '4%' } },
  // GitHub
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', size: 'md', style: { bottom: '20%', left: '18%' } },
  // LinkedIn
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg', size: 'md', style: { bottom: '12%', right: '12%' } },
  // Python
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', size: 'lg', style: { top: '62%', left: '32%' } },
  // Django
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', size: 'lg', style: { bottom: '30%', right: '6%' } },
  // Angular
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', size: 'lg', style: { top: '72%', right: '30%' } },
  // Overleaf (LaTeX)
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg', size: 'md', style: { top: '20%', left: '38%' } },
  // Java (bonus)
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', size: 'md', style: { bottom: '8%', left: '4%' } },
  // Docker (bonus)
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', size: 'md', style: { top: '52%', right: '5%' } }
]

export default function BackgroundIcons() {
  useEffect(() => {
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--mouse-x', `${x}%`)
      document.documentElement.style.setProperty('--mouse-y', `${y}%`)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="bg-icons" aria-hidden="true">
        {icons.map((ic, i) => (
          <img
            key={i}
            src={ic.src}
            alt=""
            className={`bg-icon ${ic.size}`}
            style={ic.style}
          />
        ))}
      </div>
    </>
  )
}