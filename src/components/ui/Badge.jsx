import { forwardRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Pílula amarela com o marcador da marca, usada como rótulo de seção e de página.
 * Use MotionBadge quando o rótulo participar de uma animação de entrada.
 */
const Badge = forwardRef(function Badge({ children, className = '', ...props }, ref) {
  return (
    <span
      ref={ref}
      className={`inline-flex items-center gap-2 text-text-main bg-brand-yellow text-sm font-semibold px-4 py-2 rounded-full ${className}`}
      {...props}
    >
      ✦ {children}
    </span>
  )
})

export default Badge

export const MotionBadge = motion(Badge)
