import { Link } from "react-router";

export default function QuienesSomos() {
  return (
    <main className="info-page">
      <header className="info-header"><Link className="brand" to="/"><span className="brand-mark">A</span><span>Aula Norte<span className="brand-dot">.</span></span></Link><Link className="info-home" to="/">Inicio <span>↗</span></Link></header>
      <section className="info-hero"><p className="eyebrow">QUIÉNES SOMOS</p><h1>Aprendemos haciendo.<br /><span>Crecemos en equipo.</span></h1><p>Somos un equipo de estudiantes que explora ideas, comparte conocimientos y desarrolla proyectos con curiosidad, creatividad y colaboración.</p></section>
      <section className="info-grid"><article><span className="info-number">01</span><h2>Curiosidad primero</h2><p>Nos gusta preguntar, investigar y encontrar nuevas formas de resolver problemas.</p></article><article><span className="info-number">02</span><h2>Colaboración real</h2><p>Escuchamos distintas perspectivas y construimos sobre las ideas de cada persona.</p></article><article><span className="info-number">03</span><h2>Aprender siempre</h2><p>Vemos cada reto como una oportunidad para practicar y mejorar.</p></article></section>
      <div className="info-callout"><span>✳</span><p>Este espacio forma parte de una práctica académica de navegación web con React Router.</p></div>
      <Link className="back-link" to="/">← Volver al inicio</Link>
    </main>
  );
}
