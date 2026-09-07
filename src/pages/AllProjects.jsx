import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { allProjects, projectDetails } from '../data/portfolio'

export default function AllProjects() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-24">
      <motion.div
        className="text-center mb-12 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-flex items-center gap-2 text-text-main bg-brand-yellow text-sm font-semibold px-4 py-2 rounded-full mb-8">
          ✦ Do problema ao deploy
        </span>
        <h1 className="text-[clamp(1.75rem,7.5vw,6rem)] font-extrabold tracking-tight leading-tight">
          Menos teoria, <br /> mais coisas{' '}
          <em className="  text-brand-green">rodando</em>.
        </h1>
      </motion.div>

      <div className="grid grid-cols-12 gap-5 md:gap-6">
        {allProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className={`${
              project.size === 'large' ? 'col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-4'
            } bg-white rounded-[40px] p-4 border border-border group hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(52,76,54,0.14)] hover:border-brand-yellow transition-all duration-500 flex flex-col`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[28px] overflow-hidden h-64 md:h-96 mb-6 bg-brand-cream-dark flex-shrink-0">
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

            <div className="px-3 pb-3 flex flex-col flex-1">
              <span className="inline-block bg-text-main px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-cream mb-4 self-start">
                {project.tag}
              </span>
              <h2 className="text-2xl font-semibold tracking-tight mb-3">{project.title}</h2>
              <p className="text-text-light text-base leading-relaxed flex-1">{project.description}</p>

              {projectDetails[project.id] && (
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-text-main mt-6"
                >
                  Ver Projeto
                  <span className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:-rotate-45 group-hover:scale-110">
                    →
                  </span>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
