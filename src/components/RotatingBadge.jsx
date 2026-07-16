// Insignia circular rotatoria. El texto se repite alrededor del círculo vía SVG <textPath>.
// Edita "text" y "centerLabel" o pásalos como props desde profile.json.
export default function RotatingBadge({
  text = "UI/UX Designer • Desarrollador Web • ",
  centerLabel = "Contáctame",
  href = "#contact",
}) {
  const pathId = "circlePath";

  return (
    <a
      href={href}
      className="group relative flex h-32 w-32 items-center justify-center"
      aria-label={centerLabel}
    >
      <svg
        viewBox="0 0 200 200"
        className="circular-text absolute inset-0 h-full w-full text-muted"
      >
        <defs>
          <path
            id={pathId}
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fontSize="12.5" letterSpacing="1.5" fill="currentColor">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text.repeat(3)}
          </textPath>
        </text>
      </svg>

      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-text text-center text-xs font-medium leading-tight text-bg transition-transform group-hover:scale-105">
        {centerLabel}
      </span>
    </a>
  );
}
