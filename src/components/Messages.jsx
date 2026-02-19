import { useInView } from '../hooks/useInView'
import { messages } from '../data/projects'
import './Messages.css'

export default function Messages() {
  const [ref, isInView] = useInView()

  return (
    <section className="messages-section" ref={ref}>
      <div className="section">
        <div className="section-label">Birthday Messages</div>
        <h2 className="section-title">
          생일 축하 메시지 🎉
        </h2>

        <div className={`messages-grid ${isInView ? 'visible' : ''}`}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className="message-card"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="message-emoji">{msg.emoji}</div>
              <div className="message-content">
                <p className="message-text">"{msg.text}"</p>
                <div className="message-from">— {msg.from}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
