import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projectDetails, allProjects } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

// bloco usado quando o projeto não tem imagem própria, no mesmo padrão da listagem
function ImagemFallback({ texto, className }) {
  return (
    <div
      className={`w-full flex items-center justify-center font-semibold text-xl text-text-main bg-brand-yellow ${className}`}
    >
      {texto}
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectDetails[id]

  if (!project) return <Navigate to="/projects" replace />

  const naListagem = allProjects.find((p) => String(p.id) === id)
  const outros = allProjects.filter((p) => String(p.id) !== id && projectDetails[p.id]).slice(0, 2)
  // títulos de uma palavra só ficariam inteiros em verde, então destaca-se apenas o ponto
  const palavras = project.title.split(' ')
  const inicio = palavras.slice(0, -1).join(' ')
  const fim = palavras.slice(-1)

  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
      <motion.section
        className="pt-16 md:pt-24 pb-10 md:pb-16"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-text-main bg-brand-yellow text-sm font-semibold px-4 py-2 rounded-full mb-8"
        >
          ✦ {naListagem?.tag ?? 'Estudo de caso'}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2rem,7vw,5rem)] font-extrabold tracking-tight leading-tight mb-6"
        >
          {inicio ? (
            <>
              {inicio} <em className="text-brand-green">{fim}.</em>
            </>
          ) : (
            <>
              {fim}
              <em className="text-brand-green">.</em>
            </>
          )}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-text-light text-[1.05rem] leading-[1.8] max-w-[700px] mb-8"
        >
          {project.intro}
        </motion.p>

        {project.repo && (
          <motion.a
            variants={fadeUp}
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-text-main px-7 py-3 rounded-full text-[0.95rem] font-semibold text-text-main hover:bg-text-main hover:text-brand-cream transition-colors duration-200"
          >
            Ver no GitHub ↗
          </motion.a>
        )}
      </motion.section>

      <motion.div
        className="rounded-[40px] overflow-hidden mb-14 md:mb-24 border border-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {project.mainImage ? (
          <img src={project.mainImage} alt={project.title} className="w-full" />
        ) : (
          <ImagemFallback texto={project.imageFallback} className="h-44 md:h-60" />
        )}
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 mb-16 md:mb-28">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-white rounded-[40px] p-6 md:p-8 border border-border md:sticky md:top-28">
            {Object.entries(project.info).map(([label, value]) => (
              <div key={label} className="mb-6 last:mb-0">
                <span className="block text-[0.68rem] font-bold uppercase tracking-widest text-text-light mb-1.5">
                  {label}
                </span>
                <span className="text-lg font-medium text-text-main">{value}</span>
              </div>
            ))}
          </div>
        </motion.aside>

        <motion.article
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight mb-5 text-text-main">
                {section.title}
              </h2>
              <p className="text-text-light text-[1.05rem] leading-[1.8]">{section.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-text-main">Destaques</h2>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-baseline gap-3 text-text-main font-medium">
                  <span className="text-brand-coral text-sm flex-shrink-0">✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </section>

      {project.gallery?.length > 0 && (
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {project.gallery.map((img, i) => (
            <div
              key={img}
              className={`rounded-[40px] overflow-hidden group border border-border ${
                i === 2 ? 'col-span-1 md:col-span-2' : ''
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </motion.section>
      )}

      {outros.length > 0 && (
        <section className="mb-16 md:mb-24">
          <div className="flex justify-between items-end gap-4 mb-10 md:mb-14">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-tight">
              Outros Projetos
            </h2>
            <Link
              to="/projects"
              className="text-sm font-semibold text-text-light hover:text-text-main transition-colors border-b border-text-light hover:border-text-main pb-0.5"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outros.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="bg-white p-3 rounded-[40px] border border-border group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(52,76,54,0.14)] hover:border-brand-yellow transition-all duration-500 block"
              >
                <div className="rounded-[28px] overflow-hidden h-56 md:h-64 mb-6 bg-brand-cream-dark">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <ImagemFallback texto={p.imageFallback} className="h-full" />
                  )}
                </div>
                <div className="px-3 pb-3">
                  <span className="inline-block bg-text-main px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-cream mb-4">
                    {p.tag}
                  </span>
                  <h3 className="text-[1.75rem] font-semibold tracking-tight mb-3">{p.title}</h3>
                  <p className="text-text-light text-base leading-relaxed">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
