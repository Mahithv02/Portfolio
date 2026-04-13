import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
