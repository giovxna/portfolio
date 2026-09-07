import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Chip from './Chip'
import ImageFallback from './ImageFallback'

/**
 * Card de projeto usado na home, na listagem e no rodapé da página de detalhe.
 * Recebe `to` quando o projeto tem página própria: nesse caso o card inteiro
 * vira link, e por isso a chamada "Ver Projeto" é um span, não outro link.
 */
const ProjectCard = forwardRef(function ProjectCard(
  {
    project,
    to,
    imageHeight = 'h-60 md:h-80',
    titleClassName = 'text-[1.75rem]',
    showAction = true,
    className = '',
    ...props
  },
  ref
) {
  const Wrapper = to ? Link : 'div'

  return (
    <Wrapper
      ref={ref}
      {...(to ? { to } : {})}
      className={`bg-white p-3 rounded-[40px] border border-border group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(52,76,54,0.14)] hover:border-brand-yellow transition-all duration-500 flex flex-col ${className}`}
      {...props}
    >
      <div
        className={`rounded-[28px] overflow-hidden ${imageHeight} mb-6 bg-brand-cream-dark flex-shrink-0`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <ImageFallback className="h-full">{project.imageFallback}</ImageFallback>
        )}
      </div>

      <div className="px-3 pb-3 flex flex-col flex-1">
        <Chip className="mb-4 self-start">{project.tag}</Chip>
        <h3 className={`${titleClassName} font-semibold tracking-tight mb-3`}>{project.title}</h3>
        <p className="text-text-light text-base leading-relaxed flex-1">{project.description}</p>

        {showAction && to && (
          <span className="inline-flex items-center gap-2 font-semibold text-text-main mt-6">
            Ver Projeto
            <span className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:-rotate-45 group-hover:scale-110">
              →
            </span>
          </span>
        )}
      </div>
    </Wrapper>
  )
})

export default ProjectCard

export const MotionProjectCard = motion(ProjectCard)
