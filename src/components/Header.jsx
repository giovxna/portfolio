import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <Link to="/" className="logo">Giovana.</Link>
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            Sobre
          </Link>
          <a href="/#contact">Contato</a>
        </nav>
        <a href="/#contact" className="btn-pill">Vamos Conversar</a>
      </div>
    </header>
  )
}

export default Header
