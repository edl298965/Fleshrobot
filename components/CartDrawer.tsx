'use client';

import { useEffect } from 'react';
import { useCart } from '@/lib/cart';
import { buildCheckoutUrl } from '@/lib/checkout';
import { X, Minus, Plus, Trash2, ShoppingCart, ExternalLink } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQty, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const checkoutUrl = buildCheckoutUrl(items);

  const btnBase: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '0.25rem',
    borderRadius: '4px',
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
          zIndex: 200,
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(440px, 100vw)',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--color-border)',
          zIndex: 201,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--color-border)',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShoppingCart size={20} style={{ color: 'var(--color-gold)' }} />
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: '1.3rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                margin: 0,
                color: 'var(--color-text)',
              }}
            >
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span
                style={{
                  background: 'var(--color-gold)',
                  color: '#000',
                  borderRadius: '50%',
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            style={{
              ...btnBase,
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              color: 'var(--color-text-muted)',
              padding: '0.4rem',
            }}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Items ── */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
          {items.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 1rem',
                color: 'var(--color-text-muted)',
                textAlign: 'center',
              }}
            >
              <ShoppingCart
                size={44}
                style={{ opacity: 0.2, marginBottom: '1rem', color: 'var(--color-gold)' }}
              />
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Your cart is empty.</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                Add products from the shop to get started.
              </p>
              <button
                onClick={closeCart}
                className="btn-outline"
                style={{ marginTop: '1.5rem', padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    alignItems: 'start',
                  }}
                >
                  {/* Left: name + price */}
                  <div>
                    <p
                      style={{
                        color: 'var(--color-text)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        lineHeight: 1.35,
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        color: 'var(--color-gold)',
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.72rem',
                        marginTop: '0.15rem',
                      }}
                    >
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  {/* Right: qty controls + remove */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '0.6rem',
                    }}
                  >
                    {/* Qty stepper */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        padding: '0.2rem 0.3rem',
                      }}
                    >
                      <button
                        onClick={() => setQty(item.id, item.qty - 1)}
                        style={{ ...btnBase, color: 'var(--color-text-muted)' }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span
                        style={{
                          color: 'var(--color-text)',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          minWidth: '22px',
                          textAlign: 'center',
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        onClick={() => setQty(item.id, item.qty + 1)}
                        style={{ ...btnBase, color: 'var(--color-text-muted)' }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        ...btnBase,
                        color: 'var(--color-text-muted)',
                        gap: '0.3rem',
                        fontSize: '0.72rem',
                        fontFamily: "'Barlow', sans-serif",
                      }}
                    >
                      <Trash2 size={12} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer / Checkout ── */}
        {items.length > 0 && (
          <div
            style={{
              borderTop: '1px solid var(--color-border)',
              padding: '1.25rem 1.5rem',
              background: 'var(--bg-card)',
              flexShrink: 0,
            }}
          >
            {/* Total row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  color: 'var(--color-text-muted)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Wholesale Total
              </span>
              <span
                style={{
                  color: 'var(--color-text)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Disclaimer */}
            <p
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.7rem',
                lineHeight: 1.55,
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              Prices shown are wholesale. Secure checkout powered by
              Youngevity — ships directly to your door.
            </p>

            {/* Checkout CTA */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                width: '100%',
                justifyContent: 'center',
                marginBottom: '0.65rem',
                textDecoration: 'none',
              }}
            >
              <ExternalLink size={16} />
              Checkout via Youngevity
            </a>

            <button
              onClick={closeCart}
              className="btn-outline"
              style={{
                width: '100%',
                justifyContent: 'center',
                fontSize: '0.85rem',
                padding: '0.6rem 1rem',
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
