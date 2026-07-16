// Ilustración decorativa original (no es un logo ni pertenece a terceros).
// Púedes ocultarla fácilmente quitando <BulbIllustration /> de Home.jsx si no la quieres.
export default function BulbIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="55" r="42" className="fill-accent/20" />
      <path
        d="M60 18a37 37 0 0 0-22 66c5 4 8 9 8 15v3h28v-3c0-6 3-11 8-15a37 37 0 0 0-22-66Z"
        className="fill-accent/80"
      />
      <rect x="46" y="108" width="28" height="8" rx="2" className="fill-text/70" />
      <rect x="49" y="119" width="22" height="7" rx="2" className="fill-text/50" />
      <line x1="60" y1="4" x2="60" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
      <line x1="24" y1="20" x2="31" y2="27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
      <line x1="96" y1="20" x2="89" y2="27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
    </svg>
  );
}
