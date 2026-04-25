import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import DomainSection from './components/DomainSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MilestonesSection from './components/MilestonesSection'
import Navbar from './components/Navbar'
import ResourceSection from './components/ResourceSection'
import { documents, presentations } from './data/siteData'

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <DomainSection />
      <MilestonesSection />
      <ResourceSection
        id="documents"
        eyebrow="Project Artifacts"
        title="Documents"
        subtitle="Key written deliverables and publication assets."
        items={documents}
      />
      <ResourceSection
        id="presentations"
        eyebrow="Research Communication"
        title="Presentations"
        subtitle="Milestone slide decks and final project demonstration material."
        items={presentations}
      />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
