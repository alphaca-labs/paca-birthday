import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cake">🎂</div>
        <h2 className="footer-title">
          Happy Birthday, paca.
        </h2>
        <p className="footer-subtitle">
          오늘만큼은 최적이 아니라 최고의 하루를 보내세요.
        </p>
        <div className="footer-divider" />
        <p className="footer-credit">
          Made with ❤️ by 알파카랩스 팀
        </p>
        <p className="footer-manifesto">
          "Be optimal, not best." — 하지만 오늘만은 예외.
        </p>
        <p className="footer-year">
          © {year} alphaca labs
        </p>
      </div>
    </footer>
  )
}
