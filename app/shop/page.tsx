import Link from 'next/link';
import { ArrowRight, ExternalLink, ShieldCheck, Star } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';

export const metadata = {
  title: 'The Flesh Robot | Shop — Youngevity Products',
  description:
    'The Mighty 90 essential nutrients. Shop the Healthy Body Start Pack and targeted Youngevity products. Give your body the raw materials it needs.',
};

const products = [
  {
    id: 'hbsp',
    sku: '10252Q',
    price: 146.95,
    featured: true,
    name: 'Healthy Body Start Pack',
    badge: 'Most Popular — Start Here',
    badgeColor: 'var(--color-green)',
    img: '/products/healthy-body-pak-2.5.png',
    desc: 'The complete Mighty 90 — 60 minerals, 16 vitamins, 12 amino acids, and 2–3 essential fatty acids. The non-negotiable foundation for achieving perfect biochemical nutrition.',
    highlights: [
      'Provides all 90 essential nutrients the body cannot make',
      'Dosed by body weight (1 pack per 100 lbs)',
      'Liquid colloidal delivery — up to 98% bioavailable',
      'Fixes the root instead of treating the fruit',
      'Includes BTT 2.0, Osteo-FX™, Selenium & EFAs',
    ],
    includes: ['Beyond Tangy Tangerine 2.0', 'Beyond Osteo-FX™', 'Ultimate Selenium', 'EFA Plus'],
  },
];

const supplements = [
  {
    id: 'btt',
    sku: 'USYG100075',
    price: 69.95,
    name: 'Beyond Tangy Tangerine 2.0',
    category: 'Foundation Nutrition',
    color: '#fbbf24',
    img: '/products/btt-2.0.png',
    desc: '245 nutrients and 115 fruits and vegetables. Incredibly high ORAC antioxidant value to neutralize free radicals. The cornerstone of the Mighty 90.',
    tags: ['Antioxidant', 'Multi-Nutrient', 'Daily Foundation'],
  },
  {
    id: 'osteo',
    sku: 'USYG103211',
    price: 48.95,
    name: 'Beyond Osteo-FX™',
    category: 'Bone & Joint',
    color: '#60a5fa',
    img: '/products/beyond-osteo-powder.png',
    desc: 'Liquid colloidal calcium, magnesium, and vitamin D3 for optimal absorption. Essential for repairing the structural matrix — bones, joints, and connective tissue.',
    tags: ['Calcium', 'Magnesium', 'D3', 'Bone Health'],
  },
  {
    id: 'selenium',
    sku: '20971',
    price: 30.95,
    name: 'Ultimate Selenium',
    category: 'Heart & Antioxidant',
    color: '#f87171',
    img: '/products/Ultimates selenium.png',
    desc: 'High-potency selenium with co-factors. Essential for defending against cardiomyopathy and protecting cells from oxidative free radical damage.',
    tags: ['Heart Health', 'Antioxidant', 'Selenium'],
  },
  {
    id: 'msm',
    sku: 'USFL000123',
    price: 43.95,
    name: 'MSM Ultra',
    category: 'Connective Tissue',
    color: '#34d399',
    img: '/products/MSM Ultra.png',
    desc: 'Highly absorbable sulfur compound that supports the deep maintenance and repair of cartilage, ligaments, and tendons. Critical for joint regeneration.',
    tags: ['Sulfur', 'Joint Repair', 'Cartilage'],
  },
  {
    id: 'daily-classic',
    sku: 'USYG100084',
    price: 43.95,
    name: 'Ultimate Daily Classic™',
    category: 'Circulation & Kidneys',
    color: '#a78bfa',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=70',
    desc: 'Expertly formulated to support healthy blood flow through blocked arteries and comprehensive support for kidney filtration health.',
    tags: ['Circulation', 'Kidney Health', 'Cardiovascular'],
  },
  {
    id: 'fucoidz',
    sku: '3005',
    price: 43.95,
    name: 'Fucoid Z',
    category: 'Blood Purification',
    color: '#06b6d4',
    img: '/products/fucoidz_label_1119_1200x900.png',
    desc: 'A powerful seaweed extraction that acts as "nature\'s heparin" for blood purification, gut barrier repair, and deep connective tissue support.',
    tags: ['Blood Purification', 'Gut Repair', 'Seaweed Extract'],
  },
  {
    id: 'sweeteze',
    sku: '21014',
    price: 29.95,
    name: 'SweetEZE',
    category: 'Blood Sugar',
    color: '#fbbf24',
    img: 'https://images.unsplash.com/photo-1576671414121-aa2d60f93631?w=500&q=70',
    desc: 'Botanical and mineral formulation to support healthy blood glucose levels. Essential for anyone dealing with metabolic syndrome or insulin resistance.',
    tags: ['Blood Sugar', 'Botanical', 'Insulin Support'],
  },
  {
    id: 'microbiome',
    sku: 'USYG300004',
    price: 59.95,
    name: 'Ultimate Microbiome',
    category: 'Gut Health',
    color: '#34d399',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=70',
    desc: 'Pre, pro, and post-biotics in one complete formulation. Rebuilds healthy microbiome terrain after years of damage from processed foods and antibiotics.',
    tags: ['Probiotics', 'Prebiotics', 'Gut Flora'],
  },
];

export default function ShopPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(9,14,12,0.97) 0%, rgba(9,14,12,0.6) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, transparent, var(--color-gold), transparent)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 3rem', width: '100%' }}>
          <div className="section-tag-gold">Youngevity · Dr. Wallach&apos;s Formulations</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.0 }}>
            The Raw <span className="gold-text">Materials</span>
            <br />for Healing
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '560px' }}>
            Do not view these as isolated &quot;cures.&quot; They are the essential raw ingredients
            required for your body to activate its own healing system.
          </p>
        </div>
      </section>

      {/* ── FEATURED PACK ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Start Here — The Foundation</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              The <span className="gold-text">Healthy Body Start Pack</span>
            </h2>
          </div>

          {products.map((p) => (
            <div
              key={p.id}
              style={{
                background: 'linear-gradient(135deg, rgba(212,160,23,0.06) 0%, rgba(34,197,94,0.04) 100%)',
                border: '1px solid rgba(212,160,23,0.25)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              }}
            >
              <div style={{ position: 'relative', minHeight: '320px' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, position: 'absolute', inset: 0 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, var(--bg-card))' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    background: 'var(--color-gold)',
                    color: '#000',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '50px',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <Star size={12} fill="#000" />
                  {p.badge}
                </div>
              </div>

              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-text)', marginBottom: '1rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                    What&apos;s Included:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {p.includes.map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: '0.25rem 0.7rem',
                          background: 'rgba(212,160,23,0.1)',
                          border: '1px solid rgba(212,160,23,0.2)',
                          borderRadius: '50px',
                          color: 'var(--color-gold)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                  {p.highlights.map((h) => (
                    <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <ShieldCheck size={15} style={{ color: 'var(--color-green)', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.8rem',
                      color: 'var(--color-gold)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    ${p.price.toFixed(2)}
                  </span>
                  <span
                    style={{
                      marginLeft: '0.6rem',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.8rem',
                    }}
                  >
                    wholesale
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <AddToCartButton id={p.id} name={p.name} sku={p.sku} price={p.price} />
                  <a
                    href="https://calendly.com/edl298965/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Order via Consultation
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ALL PRODUCTS ─────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag-gold">Targeted Supplementation</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>
              Individual <span className="gold-text">Products</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              These are added <em>on top of</em> the foundational Start Pack based on your specific health goals and Coach Ed&apos;s assessment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {supplements.map((s) => (
              <div
                key={s.name}
                className="glass-card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={s.img}
                    alt={s.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, var(--bg-card))' }} />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '1rem',
                      background: 'rgba(0,0,0,0.7)',
                      color: s.color,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '50px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}
                  >
                    {s.category}
                  </div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.6rem' }}>{s.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '0.2rem 0.55rem',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '50px',
                          color: 'var(--color-text-muted)',
                          fontSize: '0.72rem',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.15rem',
                        color: 'var(--color-gold)',
                      }}
                    >
                      ${s.price.toFixed(2)}
                    </span>
                    <AddToCartButton id={s.id} name={s.name} sku={s.sku} price={s.price} size="sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDERING CTA ─────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--color-border)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag-gold" style={{ marginBottom: '1rem' }}>How to Order</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Not Sure What <span className="gold-text">You Need?</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Coach Ed recommends starting with a free health evaluation and consultation.
            He will determine your foundational protocol and any targeted FX Packs based on
            your specific health goals — so you&apos;re never guessing.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/health-eval" className="btn-gold">
              Take the Health Evaluation
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://calendly.com/edl298965/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Schedule Free Consult
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
