'use client'
import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'Next.js Engineer', 'React Specialist', 'UI Craftsman']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.3,
        zIndex: 0,
      }} />

      {/* Accent blob */}
      <div style={{
        position: 'absolute',
        right: '-200px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(232,255,71,0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            color: 'var(--accent)',
            marginBottom: '32px',
            textTransform: 'uppercase',
          }}
        >
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--accent)',
            display: 'inline-block',
            animation: 'pulse-ring 1.5s ease-out infinite',
            boxShadow: '0 0 0 0 var(--accent)',
          }} />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(52px, 9vw, 110px)',
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '24px',
            animationDelay: '0.1s',
            opacity: 0,
          }}
        >
          Mahith
          <br />
          <span style={{ color: 'var(--accent)' }}>V.</span>
        </h1>

        {/* Typewriter */}
        <div
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            color: 'var(--muted)',
            marginBottom: '40px',
            animationDelay: '0.2s',
            opacity: 0,
            minHeight: '40px',
          }}
        >
          {'// '}
          <span style={{ color: 'var(--text)' }}>{displayed}</span>
          <span className="cursor-blink" style={{ color: 'var(--accent)' }}>|</span>
        </div>

        {/* Summary */}
        <p
          className="animate-fade-up"
          style={{
            maxWidth: '560px',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--muted)',
            marginBottom: '48px',
            animationDelay: '0.3s',
            opacity: 0,
          }}
        >
          Software Development Engineer building scalable web applications, optimizing frontend
          performance, and delivering user-friendly solutions with React & Next.js.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            animationDelay: '0.4s',
            opacity: 0,
          }}
        >
          <a
            href="#work"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--bg)',
              background: 'var(--accent)',
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,255,71,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            View My Work →
          </a>
          <a
            href="https://github.com/Mahithv02"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--muted)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />
        Scroll
      </div>
    </section>
  )
}
