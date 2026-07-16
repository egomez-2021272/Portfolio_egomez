// Pequeñas cruces decorativas en las esquinas, como en el sitio de referencia.
export default function CornerCrosses() {
  const positions = [
    "top-4 left-4",
    "top-4 right-4",
    "bottom-4 left-4",
    "bottom-4 right-4",
  ];

  return (
    <>
      {positions.map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none fixed ${pos} z-40 hidden select-none text-border sm:block`}
          aria-hidden="true"
        >
          +
        </span>
      ))}
    </>
  );
}
