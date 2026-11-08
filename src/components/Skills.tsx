import { skills } from '../data/profile'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.title} className="panel">
            <h3 className="panel-title">{group.title}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
