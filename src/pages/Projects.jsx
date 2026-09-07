import { motion } from 'framer-motion'
import { allProjects, projectDetails } from '../data/projects'
import Badge from '../components/ui/Badge'
import { MotionProjectCard } from '../components/ui/ProjectCard'

export default function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-24">
      <motion.div
        className="text-center mb-12 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Badge className="mb-8">Do problema ao deploy</Badge>
        <h1 className="text-[clamp(1.75rem,7.5vw,6rem)] font-extrabold tracking-tight leading-tight">
          Menos teoria, <br /> mais coisas <em className="text-brand-green">rodando</em>.
        </h1>
      </motion.div>

      <div className="grid grid-cols-12 gap-5 md:gap-6">
        {allProjects.map((project, i) => (
          <MotionProjectCard
            key={project.id}
            project={project}
            to={projectDetails[project.id] ? `/projects/${project.id}` : undefined}
            imageHeight="h-64 md:h-96"
            titleClassName="text-2xl"
            className={
              project.size === 'large' ? 'col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-4'
            }
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </section>
  )
}
