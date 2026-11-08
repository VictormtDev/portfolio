import { projects } from '../data/projects'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      {projects.length === 0 ? (
        <div className="panel empty">
          <p className="empty-title">Carregando a próxima fase</p>
          <div className="loader" aria-hidden="true">
            <span />
          </div>
          <p>Projetos em construção. Em breve, novas APIs e aplicações por aqui.</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="panel project">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.highlights && (
                <ul className="highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Ver código ↗
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Abrir demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
