'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['Next.js', 'React.js', 'Tailwind CSS'],
  },
  {
    label: 'Tools & APIs',
    skills: ['Git', 'GitHub', 'VS Code', 'REST APIs'],
  },
]

const marqueeItems = [
  'Java', 'Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'REST APIs', 'Git', 'GitHub', 'HTML5', 'CSS3', 'Node.js', 'VS Code',
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} style={{ padding: '120px 0' }}>
      {/* Marquee */}
      <div style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
        marginBottom: '100px',
        background: 'var(--surface)',
      }}>
        <div className="marquee-track" style={{ display: 'flex', gap: '0', width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: i % 6 === 0 ? 'var(--accent)' : 'var(--muted)',
              padding: '0 32px',
              whiteSpace: 'nowrap',
            }}>
              {item} <span style={{ color: 'var(--border)', margin: '0 8px' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            04 / Skills
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <h2 className="reveal" style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(36px, 5vw, 64px)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '64px',
          color: 'var(--text)',
        }}>
          Tech Stack
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="reveal card"
              style={{ padding: '40px 36px' }}
            >
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}>
                {group.label}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {group.skills.map((skill, j) => (
                  <div key={j}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', color: 'var(--text)', fontWeight: 600 }}>
                        {skill}
                      </span>
                    </div>
                    <div style={{ height: '1px', background: 'var(--border)', position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '1px',
                        background: 'var(--accent)',
                        width: `${85 + Math.random() * 12}%`,
                        opacity: 0.7,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="reveal" style={{ marginTop: '80px', padding: '48px', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'var(--accent)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Education
              </p>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                B.E. in Computer Science
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)' }}>
                Sai Vidya Institute of Technology, Bengaluru
              </p>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', border: '1px solid var(--border)', padding: '6px 14px', letterSpacing: '0.06em' }}>
              Dec 2021 – May 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
