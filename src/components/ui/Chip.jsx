/**
 * Pílula preta usada nas tags de projeto e na lista de tecnologias.
 * Aceita `as` para renderizar como <li> dentro de listas.
 */
export default function Chip({ as: Tag = 'span', children, className = '', ...props }) {
  return (
    <Tag
      className={`inline-block bg-text-main px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-cream ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
