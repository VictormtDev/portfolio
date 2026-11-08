import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function ArcadeButtons() {
  const { links } = profile
  return (
    <div className="arcade-buttons">
      <a className="arcade-btn arcade-btn--magenta" href={links.github} target="_blank" rel="noreferrer">
        <span className="arcade-cap">
          <GitHubIcon size={34} />
        </span>
        <span className="arcade-label">GitHub</span>
      </a>
      <a className="arcade-btn arcade-btn--cyan" href={links.linkedin} target="_blank" rel="noreferrer">
        <span className="arcade-cap">
          <LinkedInIcon size={30} />
        </span>
        <span className="arcade-label">LinkedIn</span>
      </a>
    </div>
  )
}
