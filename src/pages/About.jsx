import { motion } from 'framer-motion'
import { profileCard } from '../data/profile'
import Badge from '../components/ui/Badge'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function ProfileCard({ data }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ rotate: 0, y: -6 }}
      initial={{ rotate: 1.5 }}
      className="border border-border rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(9,63,49,0.10)] cursor-default"
      style={{ rotate: '1.5deg' }}
    >
      <div className="bg-brand-green px-7 py-6 flex items-center justify-between gap-4">
        <span className="text-white font-semibold tracking-tight">{data.name}</span>
        <span className="flex items-center gap-2 text-white/70 text-xs font-medium whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse flex-shrink-0" />
          {data.status}
        </span>
      </div>

      <div className="bg-white">
        {data.rows.map(({ label, value, highlight }) => (
          <div key={label} className="grid grid-cols-[100px_1fr] gap-4 px-7 py-4 border-b border-border last:border-b-0 items-center">
            <span className="text-[0.68rem] font-bold uppercase tracking-widest text-text-light">
              {label}
            </span>
            <span className={`text-sm font-medium ${highlight ? 'text-brand-green' : 'text-text-main'}`}>
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-brand-cream px-7 py-5">
        <p className="font-serif italic text-sm text-text-light leading-relaxed">{data.quote}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-14 md:pt-24 pb-14 md:pb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp}>
            <Badge className="mb-8">A pessoa por trás dos commits</Badge>
            <h1 className="text-[clamp(2rem,7vw,5rem)] font-extrabold tracking-tight leading-tight mb-6">
              Aprendendo a construir, <br /> aprendendo a{' '}
              <em className=" text-brand-green">resolver</em>.
            </h1>
            
          </motion.div>

          <ProfileCard data={profileCard} />
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pb-16 md:pb-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-10 md:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-6 text-text-light text-[1.05rem] leading-[1.8]">
            <p>
              <span className="float-left font-serif text-[5rem] leading-[0.8] pr-4 pt-1 text-brand-coral">
                M
              </span>
              inha história não começou num diploma, começou dissecando temas de Tumblr. Cresci na{' '}
              <strong className="text-text-main font-semibold">Zona Leste de São Paulo</strong>{' '}
              desmontando layouts para descobrir por que aquilo funcionava. Essa curiosidade me levou
              à <strong className="text-text-main font-semibold">SPTech</strong>, onde eu me encontrei
              no backend e na arquitetura de software.
            </p>
            <p>
              Foi no <strong className="text-text-main font-semibold">Itaú Unibanco</strong>, como
              estagiária em dados, que eu entendi o que significa escala. Trabalhei com pipelines de
              ingestão e processamento em Python e AWS, e com controles de governança que garantiam a
              qualidade dos indicadores usados nas decisões do banco.
            </p>
            <p>
              Hoje, na <strong className="text-text-main font-semibold">Webmotors</strong>, trabalho
              nos serviços que ligam quem procura ao carro certo. No dia a dia desenvolvo APIs em C# e
              .NET, cuido de arquiteturas em nuvem (estou estudando para a certificação AWS) e
              acompanho a saúde das nossas Lambdas no Datadog. Não considero uma entrega pronta só
              porque subiu para produção. Ela precisa performar bem e se manter estável.
            </p>
            <p>
              Fora do trabalho, uso tecnologia em projetos pessoais que resolvem problemas de outras
              pessoas. É onde eu testo ideias novas e continuo aprendendo no meu ritmo.
            </p>
          </div>

          <blockquote className="border-l-2 border-brand-coral pl-6 md:pl-8 font-serif italic text-[clamp(1.4rem,3vw,1.8rem)] text-text-main leading-snug self-start mt-4">
            "Entrei na área querendo impactar a vida de outras pessoas com criações próprias e criativas."
          </blockquote>
        </motion.div>
      </section>
    </>
  )
}
