import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './Icons'

const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const { links } = profile
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Início">
          VM
        </a>
        <nav className="nav" aria-label="Seções">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-social">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-link icon-link--magenta"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-link icon-link--cyan"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}
