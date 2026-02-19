import { useEffect, useState } from 'react'

const COLORS = ['#c9a96e', '#e8d5a8', '#6e8ec9', '#f0ece4', '#a88a4e', '#ff6b6b', '#ffd93d']

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function Confetti() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const count = window.innerWidth < 768 ? 40 : 80
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: randomBetween(0, 100),
      delay: randomBetween(0, 3),
      duration: randomBetween(3, 6),
      size: randomBetween(4, 10),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: randomBetween(0, 360),
      type: Math.random() > 0.5 ? 'rect' : 'circle',
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => setParticles([]), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (particles.length === 0) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1000,
      overflow: 'hidden',
    }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: '-10px',
            width: p.type === 'circle' ? `${p.size}px` : `${p.size * 0.6}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: p.type === 'circle' ? '50%' : '2px',
            transform: `rotate(${p.rotation}deg)`,
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
