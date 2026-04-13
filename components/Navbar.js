'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Work', 'Projects', 'Skills', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(10,10,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--accent)',
          letterSpacing: '0.12em',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}
      >
        MV
      </a>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="nav-link hover-line"
            style={{ textDecoration: 'none' }}
          >
            {l}
          </a>
        ))}
        <a
          href="mailto:mahithv2110@gmail.com"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--bg)',
            background: 'var(--accent)',
            padding: '8px 18px',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#fff'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
