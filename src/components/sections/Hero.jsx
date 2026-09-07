import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { heroCard } from '../../data/profile'
import { MotionBadge } from '../ui/Badge'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const icons = {
  pin: (
    <>
      <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7.5 8.5 5.5 8.5-5.5" />
    </>
  ),
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
    />
  ),
}

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[15px] h-[15px] flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

function InfoCard() {
  return (
    <div className="relative z-20 -mt-10 mx-3 sm:mx-6 lg:mx-0 lg:absolute lg:-bottom-36 lg:-left-10 lg:right-16 lg:mt-0 bg-white border border-border rounded-[1.75rem] shadow-[0_18px_44px_rgba(52,76,54,0.16)] px-5 sm:px-6 py-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3 mb-4">
        {/* marca-texto desenhado com gradiente: acompanha a quebra de linha */}
        <span
          className="font-bold tracking-tight text-[1.05rem] self-start"
          style={{
            backgroundImage: 'linear-gradient(to top, #FEAE17 0, #FEAE17 9px, transparent 9px)',
            WebkitBoxDecorationBreak: 'clone',
            boxDecorationBreak: 'clone',
          }}
        >
          {heroCard.name}
        </span>
        <span className="text-[0.68rem] font-bold uppercase tracking-widest text-text-light whitespace-nowrap">
          {heroCard.role}
        </span>
      </div>

      <ul className="flex flex-col gap-2.5">
        {heroCard.items.map(({ icon, label, href }) => (
          <li key={label} className="flex items-center gap-3 text-sm text-text-light min-w-0">
            <span className="text-brand-green">
              <Icon name={icon} />
            </span>
            {href ? (
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="truncate hover:text-brand-green transition-colors duration-200"
              >
                {label}
              </a>
            ) : (
              <span className="truncate">{label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Hero() {
  const [semFoto, setSemFoto] = useState(false)

  return (
    <section
      id="home"
      className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-10 md:pt-16 pb-20 lg:pb-44"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center"
      >
        <div className="min-w-0">
          <MotionBadge variants={fadeUp} className="mb-7">
            Portfólio 2026
          </MotionBadge>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2rem,8.5vw,4.6rem)] lg:text-[clamp(3rem,4.6vw,4rem)] leading-[0.95] font-extrabold tracking-tight mb-6"
          >
            <span className="block">Desenvolvedora</span>
            <span
              className="block"
              style={{ color: 'transparent', WebkitTextStroke: '2px #FE6138' }}
            >
              Backend.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-text-light text-[1.05rem] leading-relaxed max-w-[440px] mb-9"
          >
            Construo APIs, serviços distribuídos e integrações em nuvem. Hoje na Webmotors, com
            passagens por Alper Seguros e Itaú Unibanco.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-pill">
              Vamos Conversar →
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-text-main px-7 py-3 rounded-full text-[0.95rem] font-semibold text-text-main hover:bg-text-main hover:text-brand-cream transition-colors duration-200"
            >
              Ver Projetos
            </Link>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative w-full max-w-[400px] mx-auto lg:mx-0">
          {/* moldura verde deslocada, dá profundidade sem poluir */}
          <div
            className="absolute inset-0 translate-x-4 -translate-y-4 rounded-[2.5rem] bg-brand-green"
            aria-hidden="true"
          />

          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square bg-brand-cream-dark">
            {semFoto ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-brand-cream-dark text-brand-green">
                <span className="text-6xl font-bold tracking-tight">GS</span>
                <span className="text-[0.68rem] uppercase tracking-widest text-brand-green/50">
                  Giovana Siqueira
                </span>
              </div>
            ) : (
              <img
                src="/GIO.png"
                alt="Giovana Siqueira"
                onError={() => setSemFoto(true)}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <InfoCard />
        </motion.div>
      </motion.div>
    </section>
  )
}
