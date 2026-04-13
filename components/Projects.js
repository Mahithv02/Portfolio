'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    number: '01',
    title: 'Glaucoma Detection',
    subtitle: 'Retinal Fundus Image Analysis',
    period: 'Dec 2024 – Feb 2025',
    description: 'A responsive web interface for uploading and analyzing retinal fundus images using deep learning to detect glaucoma with confidence scores.',
    highlights: [
      'Built responsive UI with TypeScript, React.js, Next.js, and Tailwind CSS',
      'Integrated with backend REST APIs for image submission and prediction display',
      'Implemented real-time image preview and validation',
      'Designed dynamic components showing Glaucoma/Normal output with confidence scores',
    ],
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'REST APIs', 'Deep Learning'],
    accent: '#e8ff47',
  },
  {
    number: '02',
    title: 'Smart Election Voting',
    subtitle: 'Face Recognition Authentication',
    period: 'Aug 2024 – Oct 2024',
    description: 'A secure digital voting platform using facial recognition for voter authentication, preventing duplicate or invalid voting attempts.',
    highlights: [
      'Built UI for voter registration and authentication via face recognition workflow',
      'Implemented real-time camera access and image capture using browser APIs',
      'Designed intuitive dashboard for casting votes and displaying confirmation status',
      'Added input validation and security checks to prevent duplicate voting',
    ],
    tags: ['React', 'Browser APIs', 'Face Recognition', 'UI/UX'],
    accent: '#ff6b35',
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} style={{ padding: '120px 40px', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            03 / Projects
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
          Projects
        </h2>

        <div style={{ display: 'grid', gap: '24px' }}>
          {projects.map((p, i) => (
            <div
              key={i}
              className="reveal card"
              style={{ padding: '0', overflow: 'hidden' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', minHeight: '280px' }}>
                {/* Left panel */}
                <div style={{
                  padding: '48px 40px',
                  background: 'var(--surface2)',
                  borderRight: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '3rem',
                      fontWeight: 700,
                      color: p.accent,
                      opacity: 0.2,
                      lineHeight: 1,
                      marginBottom: '20px',
                    }}>{p.number}</div>
                    <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: p.accent, letterSpacing: '0.06em' }}>
                      {p.subtitle}
                    </p>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', marginTop: '24px' }}>
                    {p.period}
                  </div>
                </div>

                {/* Right panel */}
                <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px', fontSize: '0.95rem' }}>
                      {p.description}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                      {p.highlights.map((h, j) => (
                        <li key={j} style={{ display: 'flex', gap: '10px', color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                          <span style={{ color: p.accent, flexShrink: 0 }}>›</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
