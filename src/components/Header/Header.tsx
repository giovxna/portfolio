import './Header.css';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const handleNavigation = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          Portfólio
        </a>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projetos</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">Sobre</a>
            </li>
          </ul>

          <div className="nav-close" id="nav-close">
            <i className='bx bx-x' ></i>
          </div>
            {/* img here */}
        </div>
        <div className="nav-btns">
          <i className='bx bx-moon change-theme' id="theme-button"></i>


          <div className="nav-toggle" id="nav-toggle">
            <i className='bx bx-grid-alt' ></i>
          </div>
        </div>

      </nav>
    </header>

  );
}