import './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import MemorySpotlight from './components/MemorySpotlight'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <MemorySpotlight />
      </main>
      <Footer />
    </>
  )
}
