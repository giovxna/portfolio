import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import { MotionBadge } from '../ui/Badge'
import { MotionSectionTitle } from '../ui/SectionTitle'
import Chip from '../ui/Chip'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function AboutSection() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 sm:px-6 py-14 md:py-20">
      <MotionSectionTitle
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Sobre mim
      </MotionSectionTitle>

      <motion.p
        className="text-text-light text-[1.05rem] leading-[1.8] max-w-[700px] mb-12 md:mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Desenvolvedora de software com 2 anos de experiência em sistemas distribuídos, arquitetura e
        aplicações em nuvem. Já automatizei processos de dados, migrei sistemas legados para a AWS e
        desenvolvi interfaces com foco em usabilidade.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        <MotionBadge variants={fadeUp} className="mb-8">
          Tecnologias
        </MotionBadge>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skills.map(({ label, techs }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-white rounded-[40px] p-6 md:p-8 border border-border group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(52,76,54,0.14)] hover:border-brand-yellow transition-all duration-500"
            >
              <div className="flex items-baseline gap-2.5 mb-5">
                <span className="text-brand-coral text-sm flex-shrink-0">✦</span>
                <h3 className="text-[0.68rem] font-bold uppercase tracking-widest text-text-main">
                  {label}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Chip as="li" key={tech}>
                    {tech}
                  </Chip>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
