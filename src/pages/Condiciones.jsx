import { Link } from "react-router";

export default function Condiciones() {
  return (
    <main className="legal-page"><header className="info-header"><Link className="brand" to="/"><span className="brand-mark">A</span><span>Aula Norte<span className="brand-dot">.</span></span></Link><span className="legal-badge">INFORMACIÓN DEL PROYECTO</span></header>
      <article className="legal-content"><p className="eyebrow">DOCUMENTO INFORMATIVO</p><h1>Condiciones del servicio</h1><p className="legal-updated">Última actualización: 25 de noviembre de 2026</p><p>Estas condiciones describen el funcionamiento de esta demostración académica. Al continuar, reconoces que estás usando una práctica y no un servicio de producción.</p>
        <h2>1. Servicio de demostración</h2><p>La aplicación ofrece páginas informativas y un panel visual de ejemplo. Sus tareas y datos son ficticios y se muestran únicamente para ilustrar una interfaz.</p>
        <h2>2. Sin autenticación ni persistencia</h2><p>El envío del formulario conduce directamente al dashboard, sin comprobar usuario o contraseña. Los datos ingresados no se envían ni persisten.</p>
        <h2>3. Disponibilidad y cambios</h2><p>La aplicación se proporciona «tal cual» para aprendizaje. Puede modificarse, reiniciarse o dejar de estar disponible sin previo aviso.</p>
        <h2>4. Propiedad y uso</h2><p>Los textos e interfaz incluidos son material de práctica. Puedes adaptarlos con fines educativos, respetando las políticas de tu curso y atribuyendo recursos de terceros cuando corresponda.</p>
        <h2>5. Limitación</h2><p>Al ser una maqueta, no debe utilizarse para guardar información personal, sensible, financiera o contraseñas reales.</p>
        <Link className="back-link" to="/">← Volver al inicio</Link>
      </article>
    </main>
  );
}
