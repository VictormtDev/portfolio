import { profile } from '../data/profile'
import ArcadeButtons from './ArcadeButtons'

export default function Hero() {
  const { links } = profile
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="status">
          <span className="dot" /> {profile.status}
        </p>
        <h1 className="hero-name" data-text={profile.name}>
          {profile.name}
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-text">{profile.headline}</p>
        <div className="actions">
          <a className="btn btn-primary" href="#projetos">
            Ver projetos
          </a>
          {links.cv && (
            <a className="btn" href={links.cv} download>
              Baixar currículo
            </a>
          )}
        </div>
        <ArcadeButtons />
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          <img src={profile.photo} alt={`Foto de ${profile.name}`} width={720} height={720} />
        </div>
        <figcaption className="portrait-tag">Player 1</figcaption>
      </figure>
    </section>
  )
}
