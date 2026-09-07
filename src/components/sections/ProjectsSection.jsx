import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { featuredProjects, projectDetails } from '../../data/projects'
import SectionTitle from '../ui/SectionTitle'
import { MotionProjectCard } from '../ui/ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-5 sm:px-6 pb-16 md:pb-24">
      <motion.div
        className="flex justify-between items-end gap-4 mb-10 md:mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionTitle>Projetos</SectionTitle>
        <Link
          to="/projects"
          className="text-sm font-semibold text-text-light hover:text-text-main transition-colors border-b border-text-light hover:border-text-main pb-0.5"
        >
          Ver todos →
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, i) => (
          <MotionProjectCard
            key={project.id}
            project={project}
            to={projectDetails[project.id] ? `/projects/${project.id}` : undefined}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </section>
  )
}
