import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const [ref, isInView] = useInView()

  return (
    <section className="projects-section" ref={ref}>
      <div className="section">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">paca가 이끈 프로젝트들</h2>
        <p className="section-desc">
          스타트업부터 대기업까지, 자사몰부터 AI까지.
          문제의 크기를 가리지 않았습니다.
        </p>

        <div className={`projects-grid ${isInView ? 'visible' : ''}`}>
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card"
              style={{ transitionDelay: `${(i % 8) * 0.06}s` }}
            >
              <div className="project-emoji">{project.emoji}</div>
              <div className="project-info">
                <div className="project-name">{project.name}</div>
                <div className="project-category">{project.category}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-more">
          <span className="projects-more-text">
            그리고 나머지 76개의 프로젝트들...
          </span>
        </div>
      </div>
    </section>
  )
}
