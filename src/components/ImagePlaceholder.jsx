// Muestra la imagen si "src" existe; si no, un placeholder minimal.
// Deja "image"/"photo" vacío ("") en los JSON y agrega tus imágenes cuando quieras:
// 1) copia el archivo a /public  2) pon la ruta, ej: "/foto-perfil.jpg"
export default function ImagePlaceholder({ src, alt, className = "" }) {
  if (src) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div
      className={`flex items-center justify-center border border-dashed border-border bg-surface text-center text-xs text-muted ${className}`}
    >
      {alt || "Agrega tu imagen aquí"}
    </div>
  );
}
