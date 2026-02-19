import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className={`hero-content ${loaded ? 'visible' : ''}`}>
        <div className="hero-badge">🎂 HAPPY BIRTHDAY</div>
        <h1 className="hero-title">
          <span className="hero-title-line">paca</span>
          <span className="hero-title-line hero-title-sub">최근호</span>
        </h1>
        <div className="hero-divider" />
        <p className="hero-quote">
          "Be optimal, not best."
        </p>
        <p className="hero-desc">
          알파카랩스의 대표이자, 100개 넘는 프로젝트의 캡틴.<br />
          오늘은 당신을 위한 날입니다.
        </p>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  )
}
