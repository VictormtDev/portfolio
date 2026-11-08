import { profile } from '../data/profile'
import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="prose">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
