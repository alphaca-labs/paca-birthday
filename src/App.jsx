import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Values from './components/Values'
import Messages from './components/Messages'
import Footer from './components/Footer'
import Confetti from './components/Confetti'
import './App.css'

function App() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {showConfetti && <Confetti />}
      <Hero />
      <Story />
      <Stats />
      <Projects />
      <Values />
      <Messages />
      <Footer />
    </div>
  )
}

export default App
