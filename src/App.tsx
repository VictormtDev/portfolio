import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} Victor Matheus. Feito com React e TypeScript.</span>
        <span className="credits">Créditos: ∞</span>
      </footer>
    </>
  )
}
