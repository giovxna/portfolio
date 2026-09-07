import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/portfolio'

function ExpItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-2 md:gap-6 px-3 sm:px-4 py-6 md:py-7 border-b border-border rounded-xl cursor-pointer transition-colors duration-200 ${
          open ? 'bg-brand-cream-dark' : 'hover:bg-brand-cream-dark'
        }`}
      >
        <div className="text-sm">
          <strong className="block font-semibold text-text-main mb-0.5">{item.period}</strong>
          <span className="text-[0.68rem] font-bold uppercase tracking-widest text-text-light">{item.duration}</span>
        </div>

        <div className="font-semibold text-[1.1rem] tracking-tight self-center">
          {item.company}
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 text-text-light text-sm">
          <span>{item.role}</span>
          <span
            className={`w-7 h-7 rounded-full border border-border flex items-center justify-center text-xs flex-shrink-0 transition-all duration-300 ${
              open
                ? 'rotate-180 bg-brand-green border-brand-green text-white'
                : 'text-text-main'
            }`}
          >
            ↓
          </span>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 pt-4 pb-6 mx-4 border-t border-border">
              <ul className="flex flex-col gap-2.5 pt-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-baseline gap-3 text-sm text-text-light leading-relaxed">
                    <span className="text-brand-coral text-sm flex-shrink-0">✦</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <motion.h2
          className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-tight mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Experiência
        </motion.h2>

        <div className="border-t border-border">
          {experience.map((item, index) => (
            <ExpItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
