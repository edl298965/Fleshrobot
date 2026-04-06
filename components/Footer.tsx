'use client';

import Link from 'next/link';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: '1.4rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-green)',
                marginBottom: '0.5rem',
              }}
            >
              The Flesh Robot
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Certified Wholistic Health Coach. Unlocking your body&apos;s epigenetic potential through precision nutrition.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="mailto:coachedwinoptimalhealth@gmail.com"
                style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 300ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-green)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <Mail size={14} />
                coachedwinoptimalhealth@gmail.com
              </a>
              <a
                href="tel:3128597209"
                style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 300ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-green)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <Phone size={14} />
                (312) 859-7209
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '1rem',
              }}
            >
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/dr-wallach', label: 'Foundational Truths' },
                { href: '/protocols', label: 'Health Protocols' },
                { href: '/shop', label: 'Shop' },
                { href: '/faq', label: 'FAQ / Ask Ed' },
                { href: '/health-eval', label: 'Health Evaluation' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 300ms ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-green)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '1rem',
              }}
            >
              Legal
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="/privacy" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 300ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-green)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 300ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-green)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                Terms &amp; Conditions
              </Link>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', lineHeight: 1.5, marginTop: '0.5rem' }}>
                This site provides nutritional education only. Not intended as medical advice. Consult your healthcare provider.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '1rem',
              }}
            >
              Ready to Start?
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Begin your 90-day transformation with a free consultation.
            </p>
            <a
              href="https://calendly.com/edl298965/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
            >
              <ExternalLink size={14} />
              Book Free Consult
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            © 2026 The Flesh Robot · Coach Ed. All rights reserved.
          </span>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            Powered by Youngevity · Dr. Joel Wallach&apos;s 90 for Life
          </span>
        </div>
      </div>
    </footer>
  );
}
