import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // fecha o menu ao navegar
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? 'py-4 shadow-sm' : 'py-5 md:py-6'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          className="font-extrabold text-lg sm:text-xl tracking-tight text-text-main md:justify-self-start"
        >
          Giovana.
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-text-main' : 'text-text-light hover:text-text-main'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block justify-self-end">
          <a href="/#contact" className="btn-pill">
            Vamos Conversar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          className="md:hidden -mr-2 w-11 h-11 flex flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-[2px] w-6 bg-text-main transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-text-main transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-text-main transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-5 pt-6 pb-1 flex flex-col gap-5 border-t border-border mt-5">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-200 ${
                      isActive ? 'text-text-main' : 'text-text-light'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-pill text-center mt-1"
              >
                Vamos Conversar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
