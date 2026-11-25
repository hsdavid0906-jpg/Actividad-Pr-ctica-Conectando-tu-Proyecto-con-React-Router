import { Link } from "react-router";

export default function Terminos() {
  return (
    <main className="legal-page"><header className="info-header"><Link className="brand" to="/"><span className="brand-mark">A</span><span>Aula Norte<span className="brand-dot">.</span></span></Link><span className="legal-badge">INFORMACIÓN DEL PROYECTO</span></header>
      <article className="legal-content"><p className="eyebrow">DOCUMENTO INFORMATIVO</p><h1>Términos de uso</h1><p className="legal-updated">Última actualización: 25 de noviembre de 2026</p><p>Te damos la bienvenida a Aula Norte, una interfaz creada como ejercicio académico para practicar la navegación entre páginas en una aplicación React.</p>
        <h2>1. Uso educativo</h2><p>Este sitio tiene fines exclusivamente educativos y demostrativos. Su contenido, funcionalidades y datos de ejemplo no representan una plataforma comercial ni un servicio institucional oficial.</p>
        <h2>2. Uso responsable</h2><p>Al explorar la aplicación, te comprometes a utilizarla de manera respetuosa y a no intentar afectar su funcionamiento ni el acceso de otras personas.</p>
        <h2>3. Cuenta de demostración</h2><p>El formulario de acceso solo ilustra una transición de ruta. No valida identidad, no crea cuentas y no debe utilizarse para enviar contraseñas reales. No se almacenan las credenciales escritas.</p>
        <h2>4. Contenido y disponibilidad</h2><p>La información es ilustrativa y puede cambiarse o retirarse como parte de las actividades del curso. No se garantiza la disponibilidad continua de esta demostración.</p>
        <h2>5. Aceptación</h2><p>La navegación por el sitio implica que has leído este aviso educativo y comprendes el propósito limitado de la aplicación.</p>
        <Link className="back-link" to="/">← Volver al inicio</Link>
      </article>
    </main>
  );
}
