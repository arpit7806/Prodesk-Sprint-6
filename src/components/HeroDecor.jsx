function HeroDecor() {
  return (
    <div className="hero-decor" aria-hidden="true">
      <svg className="decor-item decor-1" viewBox="0 0 64 64" fill="none">
        <path
          d="M20 10 L32 4 L44 10 L52 18 L44 22 L44 56 L20 56 L20 22 L12 18 Z"
          fill="var(--accent)"
        />
      </svg>

      <svg className="decor-item decor-2" viewBox="0 0 64 64" fill="none">
        <rect x="14" y="24" width="36" height="30" rx="4" fill="var(--accent)" />
        <path
          d="M22 24 V16 a10 10 0 0 1 20 0 V24"
          stroke="var(--accent)"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <svg className="decor-item decor-3" viewBox="0 0 64 64" fill="none">
        <path
          d="M8 40 L14 24 Q18 18 26 18 H40 Q48 18 52 24 L58 40 Z"
          fill="var(--accent)"
        />
        <rect x="8" y="40" width="50" height="8" rx="4" fill="var(--accent)" />
      </svg>

      <svg className="decor-item decor-4" viewBox="0 0 64 64" fill="none">
        <circle cx="20" cy="34" r="12" fill="var(--accent)" />
        <circle cx="44" cy="34" r="12" fill="var(--accent)" />
        <path d="M32 30 h0" stroke="var(--accent)" strokeWidth="4" />
        <path d="M8 30 L2 26" stroke="var(--accent)" strokeWidth="3" />
        <path d="M56 30 L62 26" stroke="var(--accent)" strokeWidth="3" />
      </svg>
    </div>
  );
}

export default HeroDecor;
