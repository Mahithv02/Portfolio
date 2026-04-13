'use client'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const links = [
    { label: 'Email', value: 'mahithv2110@gmail.com', href: 'mailto:mahithv2110@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/mahithv', href: 'https://linkedin.com' },
    { label: 'GitHub', value: 'github.com/Mahithv02', href: 'https://github.com' },
    { label: 'Phone', value: '+91 720-472-9226', href: 'tel:+917204729226' },
  ]

  return (
    <section id="contact" ref={sectionRef} style={{
      padding: '120px 40px 80px',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            05 / Contact
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <h2 className="reveal" style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 72px)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: 'var(--text)',
              marginBottom: '32px',
            }}>
              Let's<br /><span style={{ color: 'var(--accent)' }}>Build</span><br />Together
            </h2>
            <p className="reveal" style={{ color: 'var(--muted)', lineHeight: 1.7, maxWidth: '380px', fontSize: '0.95rem' }}>
              I'm actively looking for new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'padding-left 0.3s ease',
                  group: true,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '12px'
                  e.currentTarget.style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {link.label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', color: 'var(--text)', fontWeight: 500 }}>
                    {link.value}
                  </p>
                </div>
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', transition: 'transform 0.2s' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '100px',
          paddingTop: '32px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
            © 2026 Mahith V. Crafted with Next.js & passion.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </section>
  )
}
