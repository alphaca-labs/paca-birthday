import { useInView } from '../hooks/useInView'
import { timeline } from '../data/projects'
import './Story.css'

export default function Story() {
  const [ref, isInView] = useInView()

  return (
    <section className="story" ref={ref}>
      <div className={`section story-inner ${isInView ? 'visible' : ''}`}>
        <div className="section-label">The Journey</div>
        <h2 className="section-title">
          어떤 문제든 정확히 정의하고,<br />
          효율적으로 해결하는 여정.
        </h2>
        <p className="section-desc">
          기술이 발전해도 세상은 여전히 불완전합니다.<br />
          paca는 소프트웨어와 자동화로 이 불완전함을 줄여왔습니다.
        </p>

        <div className="timeline">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`timeline-item ${isInView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="timeline-marker">
        <div className="timeline-dot" />
        {index < timeline.length - 1 && <div className="timeline-line" />}
      </div>
      <div className="timeline-content">
        <span className="timeline-period">{item.period}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  )
}
