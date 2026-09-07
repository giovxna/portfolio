import { forwardRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Título das seções (Sobre mim, Projetos, Experiência, Outros Projetos).
 * Use MotionSectionTitle quando o título participar de uma animação de entrada.
 */
const SectionTitle = forwardRef(function SectionTitle({ children, className = '', ...props }, ref) {
  return (
    <h2
      ref={ref}
      className={`text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-tight ${className}`}
      {...props}
    >
      {children}
    </h2>
  )
})

export default SectionTitle

export const MotionSectionTitle = motion(SectionTitle)
