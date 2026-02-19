import { useInView } from '../hooks/useInView'
import { values } from '../data/projects'
import './Values.css'

export default function Values() {
  const [ref, isInView] = useInView()

  return (
    <section className="values-section" ref={ref}>
      <div className="section">
        <div className="section-label">Philosophy</div>
        <h2 className="section-title">
          흔들리지 않는 기준
        </h2>
        <p className="section-desc">
          paca가 알파카랩스에 심은 가치들.
          멋진 말이 아니라 매일의 실행 기준.
        </p>

        <div className={`values-grid ${isInView ? 'visible' : ''}`}>
          {values.map((value, i) => (
            <div
              key={i}
              className="value-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="value-header">
                <span className="value-title-en">{value.title}</span>
                <span className="value-title-ko">{value.ko}</span>
              </div>
              <p className="value-desc">{value.desc}</p>
              <p className="value-detail">{value.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
