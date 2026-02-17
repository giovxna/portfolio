import { useEffect, useState } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import Footer from '../components/Footer'
import './About.css'

function About() {
  const registerRef = useRevealOnScroll()
  const [cmdText, setCmdText] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const command = 'whoami --verbose'

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => registerRef(el))
  }, [registerRef])

  useEffect(() => {
    let i = 0
    const typeInterval = setInterval(() => {
      if (i < command.length) {
        setCmdText(command.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
        setShowCursor(false)
        setTimeout(() => setShowOutput(true), 300)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <main>
      <section className="container about-hero">
        <div ref={registerRef} className="ah-content reveal">
          <h1>
            Mais do que <br />
            <span className="italic-serif">bugs</span> de interface.
          </h1>
          <p>
            Sou a Giovana, desenvolvedora front-end com foco em UI/UX, interessada em como código, experiência e estrutura se conectam para criar produtos que fazem sentido.
          </p>
        </div>

        <div ref={registerRef} className="terminal-wrapper reveal stagger-1">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="terminal-body">
              <div className="code-line">
                <span className="prompt">➜</span>
                <span>{cmdText}</span>
                {showCursor && <span className="cursor"></span>}
              </div>
              {showOutput && (
                <div className="output">
                  <div className="code-line">
                    <span className="bracket">{'{'}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="key">"name"</span>: <span className="string">"Giovana"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="key">"age"</span>: <span className="number">23</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="key">"location"</span>: <span className="string">"São Paulo, BR"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="key">"role"</span>: <span className="string">"Front-end / UI-UX / Cloud"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="key">"status"</span>: <span className="string">"Open to work"</span>
                  </div>
                  <div className="code-line">
                    <span className="bracket">{'}'}</span>
                  </div>
                  <span className="comment">// System ready. Scroll to explore.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container story-section">
        <div ref={registerRef} className="story-grid reveal">
          <div className="story-text">
            <p className="drop-cap">
              Minha jornada na tecnologia não começou com um diploma em <strong>Análise e Desenvolvimento de Sistemas</strong>; começou com curiosidade. Crescendo na <strong>Zona Leste de São Paulo</strong>, sempre fui fascinada por entender como as coisas funcionavam por trás da interface.
            </p>
            <p>
              Minha experiência no <strong>Itaú Unibanco</strong> acelerou esse aprendizado, trazendo contato com ambientes de grande escala, governança de dados e fundamentos de cloud. Foi ali que entendi a importância de sistemas bem pensados, resilientes e responsáveis.
            </p>
            <p>
              Hoje, na <strong>Alper Tech</strong>, aplico essa base técnica no desenvolvimento de soluções mais eficientes, com atenção à performance, organização e custo. Mais do que escrever código, meu foco é criar interfaces e sistemas que funcionem bem para quem usa e para quem mantém.
            </p>
          </div>
          <div>
            <div className="pull-quote">
              "Por trás de cada clique existe uma pessoa esperando algo funcionar. Boa experiência também é empatia."
            </div>
          </div>
        </div>
      </section>

      <section className="container dna-section">
        <div ref={registerRef} className="section-header reveal">
          <h2>Meu Sistema Operacional</h2>
        </div>

        <div ref={registerRef} className="dna-grid reveal">
          <div className="dna-card dc-1">
            <div>
              <h3>Roots</h3>
              <p>Criada em ambientes dinâmicos, aprendendo a evoluir mesmo no caos.</p>
            </div>
          </div>

          <div className="dna-card dc-2">
            <h3>Filosofia</h3>
            <p>
              Acredito em simplicidade bem pensada. Boas soluções não precisam ser barulhentas — precisam ser claras, funcionais e consistentes.
            </p>
          </div>

          <div className="dna-card dc-3">
            <h3>Tech</h3>
            <ul>
              <li>React / TypeScript</li>
              <li>Java / Spring</li>
              <li>Python</li>
              <li>AWS / Azure</li>
              <li>Docker</li>
            </ul>
          </div>

          <div className="dna-card dc-4">
            <h3>Soft Skills</h3>
            <ul>
              <li>Comunicação clara</li>
              <li>Documentação</li>
              <li>Organização</li>
              <li>Aprendizado contínuo</li>
            </ul>
          </div>

          <div className="dna-card dc-5">
            <div className="big-stat">
              <span>3</span>
              <label>Anos de Exp.</label>
            </div>
            <div className="divider"></div>
            <div className="big-stat">
              <span>2</span>
              <label>Certificações</label>
            </div>
            <div className="divider"></div>
            <div className="big-stat">
              <span>∞</span>
              <label>Curiosidade</label>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About
