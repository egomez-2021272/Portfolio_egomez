export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24 border-t border-border px-6 py-8 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center text-xs text-muted">
        <p>{year} © Todos los derechos reservados.</p>
        <p>Hecho con ♥ usando React + Vite</p>
      </div>
    </footer>
  );
}
