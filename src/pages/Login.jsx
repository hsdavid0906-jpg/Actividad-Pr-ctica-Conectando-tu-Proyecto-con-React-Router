import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ejercicio sin autenticación: solo se demuestra la navegación SPA.
    navigate("/dashboard");
  };

  return (
    <main className="auth-page">
      <Link className="brand auth-brand" to="/"><span className="brand-mark">A</span><span>Aula Norte<span className="brand-dot">.</span></span></Link>
      <section className="auth-card">
        <div className="auth-symbol">✳</div>
        <p className="eyebrow">QUÉ BUENO VERTE</p>
        <h1>Inicia tu sesión</h1>
        <p className="auth-intro">Entra a tu espacio de trabajo y sigue creando.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" placeholder="nombre@ejemplo.com" autoComplete="email" required />
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" placeholder="Escribe cualquier contraseña" autoComplete="current-password" required />
          <button className="button button-primary button-full" type="submit">Entrar al Dashboard <span aria-hidden="true">→</span></button>
        </form>
        <p className="demo-note"><span>ⓘ</span> Esta práctica no valida credenciales; cualquier dato te permitirá continuar.</p>
        <Link className="back-link" to="/">← Volver al inicio</Link>
      </section>
      <p className="auth-footnote">Aprender juntos, avanzar siempre.</p>
    </main>
  );
}
