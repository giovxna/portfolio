import { useEffect } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  const registerRef = useRevealOnScroll()

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => registerRef(el))
  }, [registerRef])

  return (
    <main>
      <section className="hero container">
        <div ref={registerRef} className="reveal">
          <div className="badge-top">✦ Open for work</div>
          <h1 className="reveal-text">
            <span style={{ animationDelay: '0.1s' }}>Criando interfaces claras,</span><br />
            <span style={{ animationDelay: '0.2s' }}>funcionais e pensadas</span><br />
            <span style={{ animationDelay: '0.2s' }}>para </span>
            <span style={{ animationDelay: '0.3s' }}>
              <span className="italic-serif">pessoas</span>.
            </span>
          </h1>
          <p ref={registerRef} className="reveal stagger-3 hero-subtitle">
            Front-end developer com olhar para UI/UX, código limpo e boas práticas de desenvolvimento.
          </p>
        </div>
      </section>

      <div className="container highlights-grid">
        <div ref={registerRef} className="h-card hc-black reveal stagger-1">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span className="tech-badge">Tech Stack</span>
            <span>↗</span>
          </div>
          <div>
            <p className="tech-list">Java, Spring Boot, Python, Node.js, React</p>
          </div>
        </div>

        <div ref={registerRef} className="h-card hc-photo reveal stagger-2">
          <img src="/GIO.png" alt="Giovana" />
        </div>

        <div ref={registerRef} className="h-card hc-icon-1 reveal stagger-3">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div ref={registerRef} className="h-card hc-icon-2 reveal stagger-1">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </div>

        <div ref={registerRef} className="h-card hc-eye reveal stagger-2">
          <svg className="eye-svg" width="80" height="80" viewBox="0 0 24 24" fill="white">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" fill="var(--brand-orange)" />
          </svg>
        </div>

        <div ref={registerRef} className="h-card hc-text reveal stagger-3">
          <h3>Funcional.</h3>
        </div>

        <div ref={registerRef} className="h-card hc-list reveal stagger-1">
          <h3>Certifications</h3>
          <ul>
            <li>• AWS Developer Associate</li>
            <li>• AWS Cloud Practitioner</li>
          </ul>
        </div>
      </div>

      <section id="work" className="container projects-section">
        <div ref={registerRef} className="section-header reveal">
          <div>
            <h2 className="section-title">
              <span className="section-number">02</span> Meus<br />Projetos
            </h2>
          </div>
          <p className="section-description">
            Na interseção entre experiência do usuário, código e infraestrutura em nuvem.
          </p>
        </div>

        <div className="projects-grid">
          <div ref={registerRef} className="project-card reveal stagger-1">
            <div className="p-image">
              <img src="https://framerusercontent.com/images/cRf6OhI78D9fHIZyhDlqODIP0.webp" alt="Project 1" />
            </div>
            <div className="p-content">
              <span className="tag">Azure • FinOps</span>
              <h3>Alper Cloud Core</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus at, praesentium consequatur maxime atque distinctio perferendis, quia autem a doloribus nesciunt voluptas incidunt totam itaque quasi et voluptatum officiis.</p>
              <a href="/project/alper" className="arrow-link">
                Visitar Projeto 
                <div className="arrow-circle">→</div>
              </a>
            </div>
          </div>

          <div ref={registerRef} className="project-card reveal stagger-2">
            <div className="p-image">
              <img src="https://framerusercontent.com/images/qO1zYSdp36H8P8ueXy1s7somMo.webp" alt="Project 2" />
            </div>
            <div className="p-content">
              <span className="tag">Fullstack • React</span>
              <h3>Eco.Info Platform</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis, totam amet illo tenetur libero impedit aliquid repudiandae, laudantium consequuntur iusto recusandae maxime quas, modi quibusdam nam. Est, cumque quos!</p>
              <a href="/project/ecoinfo" className="arrow-link">
                Visitar Projeto 
                <div className="arrow-circle">→</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <h2 ref={registerRef} className="section-title reveal">Experiência</h2>
          <div className="exp-list">
            <div ref={registerRef} className="exp-item reveal stagger-1">
              <div className="exp-bullet"></div>
              <div className="exp-role">
                <h4>Analista de Desenvolvimento I</h4>
                <span>Alper Seguros</span>
              </div>
              <div className="exp-company">2024 — Atual</div>
            </div>

            <div ref={registerRef} className="exp-item reveal stagger-2">
              <div className="exp-bullet"></div>
              <div className="exp-role">
                <h4>Analytics Engineer (Estágio)</h4>
                <span>Itaú Unibanco</span>
              </div>
              <div className="exp-company">2024</div>
            </div>

            <div ref={registerRef} className="exp-item reveal stagger-3">
              <div className="exp-bullet"></div>
              <div className="exp-role">
                <h4>Monitoria de Algoritmos</h4>
                <span>Sptech</span>
              </div>
              <div className="exp-company">2023</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home
