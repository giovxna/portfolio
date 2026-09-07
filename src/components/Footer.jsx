import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { footerLinks } from '../data/portfolio'

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="bg-brand-green text-white py-16 md:py-24 px-5 sm:px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-[clamp(1.6rem,7vw,4rem)] font-bold tracking-tight leading-tight mb-4">
        Chegou até aqui,
        <br />
        então bora conversar?
      </h2>
      <a
        href="mailto:email@giovana.com"
        className="inline-block bg-brand-yellow text-text-main px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-brand-coral hover:text-brand-cream transition-colors duration-200"
      >
        Entre em Contato ↗
      </a>

      <div className="flex justify-center gap-x-6 gap-y-4 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-white/10 flex-wrap">
        {footerLinks.map(({ label, href, to }) =>
          to ? (
            <Link key={label} to={to} className="text-white/60 text-sm font-medium hover:text-white transition-colors duration-200">
              {label}
            </Link>
          ) : (
            <a key={label} href={href} className="text-white/60 text-sm font-medium hover:text-white transition-colors duration-200">
              {label}
            </a>
          )
        )}
      </div>

      <p className="mt-8 text-white/35 text-sm">Giovana © 2026</p>
    </motion.footer>
  )
}
