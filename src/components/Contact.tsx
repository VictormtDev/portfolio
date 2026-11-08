import { useState } from 'react'
import { profile } from '../data/profile'
import Section from './Section'
import ArcadeButtons from './ArcadeButtons'

export default function Contact() {
  const { links } = profile
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email)
    } catch {
      // Fallback para navegadores sem Clipboard API
      const input = document.createElement('input')
      input.value = links.email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Section id="contato" title="Continuar?">
      <div className="contact">
        <div className="prose">
          <p>
            Estou aberto a vagas de estágio e júnior em back-end ou full-stack. Se quiser conversar, é só
            mandar uma mensagem para <strong className="email-text">{links.email}</strong>.
          </p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            {copied ? 'E-mail copiado!' : 'Copiar e-mail'}
          </button>
          <a className="btn" href={`mailto:${links.email}`}>
            Abrir no app de e-mail
          </a>
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {copied ? 'E-mail copiado para a área de transferência' : ''}
        </p>
        <ArcadeButtons />
      </div>
    </Section>
  )
}
