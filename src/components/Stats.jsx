import { useEffect, useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { stats } from '../data/projects'
import './Stats.css'

function AnimatedNumber({ target, isInView }) {
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    if (target === '∞') {
      setDisplay('∞')
      return
    }

    const num = parseInt(target)
    const suffix = target.includes('+') ? '+' : ''
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let current = 0
    const increment = num / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= num) {
        current = num
        clearInterval(timer)
      }
      setDisplay(Math.floor(current) + suffix)
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return <span>{display}</span>
}

export default function Stats() {
  const [ref, isInView] = useInView()

  return (
    <section className="stats-section" ref={ref}>
      <div className="section stats-inner">
        <div className="section-label">By the Numbers</div>
        <h2 className="section-title">숫자가 말하는 이야기</h2>
        <div className={`stats-grid ${isInView ? 'visible' : ''}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="stat-number">
                <AnimatedNumber target={stat.number} isInView={isInView} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
