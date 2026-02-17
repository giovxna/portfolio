import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import './ProjectCase.css'

function ProjectCase() {
  const registerRef = useRevealOnScroll()

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => registerRef(el))
  }, [registerRef])

  return (
    <main className="container">
      <section className="project-hero">
        <div ref={registerRef} className="hero-top-row reveal">
          <h1 className="project-title">
            Event <span>Planner.</span>
          </h1>
          <a href="#" className="visit-circle" aria-label="Visit Site">
            ↗
          </a>
        </div>
        <p ref={registerRef} className="project-intro reveal">
          Uma aplicação web para planejamento e gestão de eventos, criada para tornar a organização simples, visual e intuitiva — sem abrir mão de controle e eficiência.
        </p>
      </section>

      <div ref={registerRef} className="main-image-wrapper reveal">
        <img src="https://framerusercontent.com/images/citbKyOjpLk3wbILpmphOhJ0QDM.webp" alt="EventPlanner UI" />
      </div>

      <section className="details-grid">
        <aside ref={registerRef} className="reveal">
          <div className="info-card">
            <div className="info-item">
              <div className="info-label">Role</div>
              <div className="info-value">Frontend & UI</div>
            </div>
            <div className="info-item">
              <div className="info-label">Timeline</div>
              <div className="info-value">3 Months (2023)</div>
            </div>
            <div className="info-item">
              <div className="info-label">Tech Stack</div>
              <div className="info-value tech-value">React, Next.js, Tailwind</div>
            </div>
          </div>
        </aside>

        <article ref={registerRef} className="content-wrapper reveal">
          <div className="content-block">
            <h2>The Challenge</h2>
            <p>Planejar eventos envolve lidar com muitas informações ao mesmo tempo: convidados, datas, locais, ingressos e cronogramas. O principal desafio era criar uma interface que fosse simples de usar à primeira vista, mas robusta o suficiente para gerenciar múltiplos eventos e atualizações constantes.</p>
            <p>Do ponto de vista técnico, o cuidado estava em manter a interface responsiva e organizada mesmo com dados sendo atualizados em tempo real, sem comprometer a performance.</p>
          </div>

          <div className="content-block">
            <h2>Solução</h2>
            <p>A solução foi desenvolver uma interface modular, baseada em componentes reutilizáveis, garantindo consistência visual e facilidade de manutenção.</p>
            <p>O foco esteve em clareza visual, hierarquia de informação e experiência do usuário. Recursos de atualização em tempo real foram pensados para manter os dados sincronizados, sem sobrecarregar a interface.</p>
          </div>

          <div className="content-block">
            <h2>Principais Funcionalidades</h2>
            <ul className="feature-list">
              <li>Construtor de cronogramas com arrastar e soltar</li>
              <li>Analytics de vendas de ingressos em tempo real</li>
              <li>Mapas interativos de assentos via Canvas API</li>
              <li>Notificações automáticas por email com AWS SES</li>
            </ul>
          </div>
        </article>
      </section>

      <section ref={registerRef} className="gallery-grid reveal">
        <div className="gallery-item">
          <img src="https://framerusercontent.com/images/cRf6OhI78D9fHIZyhDlqODIP0.webp" alt="Mobile View" />
        </div>
        <div className="gallery-item">
          <img src="https://framerusercontent.com/images/qO1zYSdp36H8P8ueXy1s7somMo.webp" alt="Dashboard Components" />
        </div>
        <div className="gallery-item full">
          <img src="https://framerusercontent.com/images/70LfSwFBkXSEkRPwrZ5LQ0MU7Us.webp" alt="Full Width Layout" />
        </div>
      </section>

      <section ref={registerRef} className="next-projects reveal">
        <div className="next-section-header">
          <h2>Próximos Projetos</h2>
          <Link to="/">Ver Todos</Link>
        </div>

        <div className="next-grid">
          <Link to="/project/cryptoflow" className="next-card">
            <div className="nc-img">
              <img src="https://framerusercontent.com/images/cRf6OhI78D9fHIZyhDlqODIP0.webp" alt="Next 1" />
            </div>
            <div className="nc-content">
              <h3>CryptoFlow App</h3>
              <p>Painel de negociação em tempo real.</p>
            </div>
          </Link>

          <Link to="/project/neobank" className="next-card">
            <div className="nc-img">
              <img src="https://framerusercontent.com/images/qO1zYSdp36H8P8ueXy1s7somMo.webp" alt="Next 2" />
            </div>
            <div className="nc-content">
              <h3>NeoBank UI</h3>
              <p>Interface bancária moderna.</p>
            </div>
          </Link>
        </div>
      </section>

      <footer ref={registerRef} className="footer-cta reveal">
        <h2>
          Pronto para construir algo <br />
          <span>notável?</span>
        </h2>
        <div className="cta-buttons">
          <a href="/#contact" className="btn-pill">Iniciar um Projeto</a>
          <Link to="/" className="btn-pill btn-secondary">Voltar para a Página Inicial</Link>
        </div>
        <div className="footer-copyright">© 2026 Giovana. All rights reserved.</div>
      </footer>
    </main>
  )
}

export default ProjectCase
