import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-5 sm:px-6 pb-16 md:pb-24">
      <motion.div
        className="flex justify-between items-end gap-4 mb-10 md:mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-tight">
         Projetos
        </h2>
        <Link
          to="/projects"
          className="text-sm font-semibold text-text-light hover:text-text-main transition-colors border-b border-text-light hover:border-text-main pb-0.5"
        >
          Ver todos →
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-3 rounded-[40px] border border-border group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(52,76,54,0.14)] hover:border-brand-yellow transition-all duration-500"
          >
            <div className="rounded-[28px] overflow-hidden h-60 md:h-80 mb-6 bg-brand-cream-dark">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-semibold text-xl text-text-main bg-brand-yellow">
                  {project.imageFallback}
                </div>
              )}
            </div>

            <div className="px-3 pb-3">
              <span className="inline-block bg-text-main px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-cream mb-4">
                {project.tag}
              </span>
              <h3 className="text-[1.75rem] font-semibold tracking-tight mb-3">{project.title}</h3>
              <p className="text-text-light text-base leading-relaxed mb-6">{project.description}</p>

              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 font-semibold text-text-main"
              >
                Ver Projeto
                <span className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:-rotate-45 group-hover:scale-110">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
