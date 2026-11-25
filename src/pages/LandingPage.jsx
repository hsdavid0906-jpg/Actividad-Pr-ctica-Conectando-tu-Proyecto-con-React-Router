import { Link } from "react-router";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function LandingPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Aula Norte, inicio">
          <span className="brand-mark">A</span>
          <span>Aula Norte<span className="brand-dot">.</span></span>
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <Link to="/quienes-somos">Quiénes somos</Link>
          <Link className="nav-login" to="/login">Iniciar sesión <Arrow /></Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> PROYECTO ESCOLAR · CBTIS 122</p>
            <h1>Aprender juntos.<br /><span>Avanzar siempre.</span></h1>
            <p className="hero-description">Un espacio digital creado para compartir ideas, organizar nuestro trabajo y hacer que cada proyecto llegue más lejos.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/login">Conoce tu espacio <Arrow /></Link>
              <Link className="text-link" to="/quienes-somos">Conoce al equipo <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-note"><span className="note-icon">✦</span><span>Hecho con curiosidad y trabajo en equipo.</span></div>
          </div>
          <div className="hero-art" aria-label="Ilustración de organización de ideas">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-card card-back"><span className="mini-label">IDEA 03</span><span className="scribble scribble-short" /><span className="scribble" /></div>
            <div className="art-card card-main"><div className="card-top"><span className="card-icon">✳</span><span className="card-status">EN PROGRESO</span></div><p>Una buena idea<br />crece cuando<br /><strong>se comparte.</strong></p><div className="card-bottom"><span className="avatar avatar-a">A</span><span className="avatar avatar-b">M</span><span className="avatar avatar-c">+</span><span className="card-team">equipo colaborativo</span></div></div>
            <div className="floating-tag tag-top"><span>✦</span> explorar</div><div className="floating-tag tag-bottom">✎ crear algo nuevo</div>
            <span className="sparkle sparkle-one">✳</span><span className="sparkle sparkle-two">✴</span>
          </div>
        </section>

        <section className="highlights" aria-label="Lo que nos mueve">
          <article className="highlight"><span className="highlight-icon icon-lilac">01</span><div><h2>Ideas con propósito</h2><p>Convertimos la curiosidad en proyectos que aportan.</p></div></article>
          <article className="highlight"><span className="highlight-icon icon-mint">02</span><div><h2>Hecho en equipo</h2><p>Aprendemos más cuando construimos en colaboración.</p></div></article>
          <article className="highlight"><span className="highlight-icon icon-peach">03</span><div><h2>Siempre en marcha</h2><p>Cada paso cuenta. Lo importante es seguir creciendo.</p></div></article>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 Aula Norte · Proyecto académico</span><nav aria-label="Enlaces legales"><Link to="/terminos">Términos</Link><Link to="/condiciones">Condiciones</Link></nav></footer>
    </div>
  );
}
