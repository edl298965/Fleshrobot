'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const symptoms = [
  'Chronic fatigue / low energy',
  'Joint pain / arthritis',
  'Muscle cramps or twitches',
  'Back or neck pain',
  'High blood pressure',
  'High blood sugar / diabetes',
  'Digestive issues / bloating / IBS',
  'Weight gain / difficulty losing weight',
  'Brain fog / memory issues',
  'Anxiety or depression',
  'Skin problems (eczema, psoriasis)',
  'Frequent illness / weak immune system',
  'Heart palpitations',
  'Thyroid issues',
  'Osteoporosis / bone density loss',
  'Kidney issues',
  'Cholesterol concerns',
  'Sleep problems / insomnia',
];

const medications = [
  'Blood pressure medication',
  'Cholesterol medication (statins)',
  'Diabetes medication / insulin',
  'Pain medication (NSAIDs/opioids)',
  'Antidepressants / anti-anxiety',
  'Thyroid medication',
  'Heartburn / acid reflux medication',
  'Blood thinners',
  'None currently',
];

export default function HealthEvalPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    goal: '',
    symptoms: [] as string[],
    medications: [] as string[],
    diet: '',
    timeframe: '',
    additional: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleCheck = (field: 'symptoms' | 'medications', value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '520px' }}>
          <CheckCircle size={64} style={{ color: 'var(--color-green)', marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', color: 'var(--color-text)' }}>
            Evaluation Received!
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Thank you, <strong style={{ color: 'var(--color-text)' }}>{form.name}</strong>.
            Coach Ed will review your health evaluation and reach out within 24 hours to discuss
            your personalized starting protocol.
          </p>
          <a
            href="https://calendly.com/edl298965/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Also Book a Free Consult
          </a>
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--color-border)',
    borderRadius: '10px',
    padding: '0.75rem 1rem',
    color: 'var(--color-text)',
    fontSize: '0.95rem',
    fontFamily: "'Barlow', sans-serif",
    outline: 'none',
    transition: 'border-color 300ms',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: '0.85rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-text-muted)',
    marginBottom: '0.5rem',
  };

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 1.5rem 3rem',
          background: 'linear-gradient(135deg, rgba(212,160,23,0.06) 0%, rgba(34,197,94,0.04) 100%)',
          borderBottom: '1px solid var(--color-border)',
          textAlign: 'center',
        }}
      >
        <div className="section-tag-gold" style={{ marginBottom: '1rem' }}>Free · No Obligation</div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', color: 'var(--color-text)' }}>
          Health <span className="gold-text">Evaluation</span>
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
          Complete this short assessment and Coach Ed will personally review your answers to
          build your customized nutritional starting point — completely free.
        </p>
      </section>

      {/* ── FORM ─────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
          {/* Personal Info */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
              Your Information
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              {[
                { label: 'Full Name *', field: 'name', type: 'text', required: true, placeholder: 'Your name' },
                { label: 'Email Address *', field: 'email', type: 'email', required: true, placeholder: 'your@email.com' },
                { label: 'Phone Number', field: 'phone', type: 'tel', required: false, placeholder: '(xxx) xxx-xxxx' },
                { label: 'Age', field: 'age', type: 'number', required: false, placeholder: 'e.g. 45' },
                { label: 'Body Weight (lbs)', field: 'weight', type: 'number', required: false, placeholder: 'e.g. 180' },
              ].map((f) => (
                <div key={f.field}>
                  <label style={labelStyle}>{f.label}</label>
                  <input
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={(form as unknown as Record<string, string>)[f.field]}
                    onChange={(e) => setForm((p) => ({ ...p, [f.field]: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Primary Goal */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              What is Your Primary Health Goal?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              What outcome do you most want to achieve in the next 90 days?
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {[
                'Reduce or eliminate medications',
                'Avoid surgery',
                'Lose weight',
                'Eliminate chronic pain',
                'Boost energy & vitality',
                'Improve digestion',
                'Optimize overall health',
                'Support heart health',
                'Manage blood sugar',
                'Other (describe below)',
              ].map((g) => (
                <label
                  key={g}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    cursor: 'pointer',
                    padding: '0.6rem 0.75rem',
                    background: form.goal === g ? 'rgba(212,160,23,0.1)' : 'transparent',
                    border: `1px solid ${form.goal === g ? 'rgba(212,160,23,0.4)' : 'var(--color-border)'}`,
                    borderRadius: '10px',
                    transition: 'all 300ms',
                  }}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={g}
                    checked={form.goal === g}
                    onChange={() => setForm((p) => ({ ...p, goal: g }))}
                    style={{ accentColor: 'var(--color-gold)' }}
                  />
                  <span style={{ color: form.goal === g ? 'var(--color-gold)' : 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    {g}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Symptoms */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              Current Symptoms
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              Check all that apply — even if mild.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.6rem' }}>
              {symptoms.map((s) => {
                const checked = form.symptoms.includes(s);
                return (
                  <label
                    key={s}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      cursor: 'pointer',
                      padding: '0.5rem 0.75rem',
                      background: checked ? 'rgba(34,197,94,0.08)' : 'transparent',
                      border: `1px solid ${checked ? 'rgba(34,197,94,0.3)' : 'var(--color-border)'}`,
                      borderRadius: '8px',
                      transition: 'all 300ms',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleCheck('symptoms', s)}
                      style={{ accentColor: 'var(--color-green)' }}
                    />
                    <span style={{ color: checked ? 'var(--color-green)' : 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                      {s}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Medications */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              Current Medications
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              Select any medications you are currently taking.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.6rem' }}>
              {medications.map((m) => {
                const checked = form.medications.includes(m);
                return (
                  <label
                    key={m}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      cursor: 'pointer',
                      padding: '0.5rem 0.75rem',
                      background: checked ? 'rgba(212,160,23,0.08)' : 'transparent',
                      border: `1px solid ${checked ? 'rgba(212,160,23,0.3)' : 'var(--color-border)'}`,
                      borderRadius: '8px',
                      transition: 'all 300ms',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleCheck('medications', m)}
                      style={{ accentColor: 'var(--color-gold)' }}
                    />
                    <span style={{ color: checked ? 'var(--color-gold)' : 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                      {m}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Diet & Timeframe */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
              Diet & Commitment
            </h2>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>How would you describe your current diet?</label>
                <select
                  value={form.diet}
                  onChange={(e) => setForm((p) => ({ ...p, diet: e.target.value }))}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Select one...</option>
                  <option>Standard American Diet (lots of processed food)</option>
                  <option>Mostly home-cooked, some processed</option>
                  <option>I try to eat healthy but struggle</option>
                  <option>Mostly clean whole foods</option>
                  <option>Vegetarian / Vegan</option>
                  <option>Keto / Low-carb</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>How soon are you ready to start?</label>
                <select
                  value={form.timeframe}
                  onChange={(e) => setForm((p) => ({ ...p, timeframe: e.target.value }))}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Select one...</option>
                  <option>Immediately — I&apos;m ready now</option>
                  <option>Within the next 2 weeks</option>
                  <option>Within a month</option>
                  <option>Just researching for now</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Anything else Coach Ed should know?</label>
                <textarea
                  value={form.additional}
                  onChange={(e) => setForm((p) => ({ ...p, additional: e.target.value }))}
                  placeholder="Describe any specific health concerns, surgeries, diagnoses, or questions..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
            </div>
          </div>

          {/* Disclaimer + Submit */}
          <div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1.5rem', textAlign: 'center' }}>
              This evaluation is for nutritional coaching purposes only. It is not medical advice
              and does not replace consultation with a licensed healthcare provider. Coach Ed will
              contact you within 24 hours via email or phone.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" className="btn-gold" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                Submit My Health Evaluation
                <Send size={18} />
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
