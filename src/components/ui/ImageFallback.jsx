/**
 * Bloco exibido no lugar da capa quando o projeto não tem imagem própria.
 * A altura vem de quem usa, porque varia entre card e página de detalhe.
 */
export default function ImageFallback({ children, className = '' }) {
  return (
    <div
      className={`w-full flex items-center justify-center font-semibold text-xl text-text-main bg-brand-yellow ${className}`}
    >
      {children}
    </div>
  )
}
