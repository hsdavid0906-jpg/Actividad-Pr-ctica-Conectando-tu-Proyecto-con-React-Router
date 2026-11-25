import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="not-found-page"><Link className="brand" to="/"><span className="brand-mark">A</span><span>Aula Norte<span className="brand-dot">.</span></span></Link><section className="not-found-card"><span className="not-found-number">404</span><p className="eyebrow">UPS, NOS PERDIMOS</p><h1>Esta página no existe.</h1><p>Puede que el enlace esté incompleto o que la página se haya movido. Volvamos a un lugar conocido.</p><Link className="button button-primary" to="/">← Volver al inicio</Link></section><span className="not-found-orbit" aria-hidden="true">✳</span></main>
  );
}
