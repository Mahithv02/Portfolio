'use client'
import { useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Software Developer',
    company: 'More Retail Private Limited',
    period: 'Oct 2025 – Mar 2026',
    location: 'Bengaluru',
    highlights: [
      'Built and deployed reusable advertisement page templates in Next.js.',
      'Consolidated 3+ internal web properties into a single Next.js app with shared components and routing.',
      'Audited and removed unused Tailwind/CSS classes, significantly reducing bundle size.',
      'Designed a role-based Policy & Access Management module with CRUD dashboards.',
      'Integrated frontend with REST APIs handling loading/error states and token-based authentication.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs', 'RBAC'],
  },
]

export default function Work() {
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
    <section id="work" ref={sectionRef} style={{ padding: '120px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Section label */}
      <div className="reveal" style={{
        display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px'
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          02 / Work
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
        Experience
      </h2>

      {experiences.map((exp, i) => (
        <div
          key={i}
          className="reveal card"
          style={{
            padding: '48px',
            marginBottom: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '2px', background: 'var(--accent)',
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                {exp.role}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.06em' }}>
                {exp.company} · {exp.location}
              </p>
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--muted)',
              letterSpacing: '0.08em',
              alignSelf: 'flex-start',
              border: '1px solid var(--border)',
              padding: '6px 14px',
            }}>
              {exp.period}
            </div>
          </div>

          <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {exp.highlights.map((h, j) => (
              <li key={j} style={{ display: 'flex', gap: '12px', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>→</span>
                {h}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      ))}
    </section>
  )
}
