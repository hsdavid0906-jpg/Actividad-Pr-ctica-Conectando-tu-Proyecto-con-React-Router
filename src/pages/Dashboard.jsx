import { Link } from "react-router";

const tasks = [
  { title: "Definir la idea del proyecto", detail: "Poner en común lo que queremos crear", label: "COMPLETADO", tone: "done" },
  { title: "Reunir referencias e inspiración", detail: "Compartir recursos con el equipo", label: "EN CURSO", tone: "progress" },
  { title: "Preparar la siguiente entrega", detail: "Organizar los próximos pasos", label: "POR HACER", tone: "todo" },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <Link className="brand" to="/"><span className="brand-mark">A</span><span>Aula Norte<span className="brand-dot">.</span></span></Link>
        <p className="sidebar-caption">ESPACIO DE TRABAJO</p>
        <div className="sidebar-item active"><span>▦</span> Resumen</div>
        <div className="sidebar-item"><span>◷</span> Mis proyectos</div>
        <div className="sidebar-item"><span>♧</span> Equipo</div>
        <div className="sidebar-bottom"><div className="profile-avatar">AN</div><div><strong>Estudiante</strong><small>Proyecto académico</small></div></div>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-topbar"><span>Mi espacio / <strong>Resumen</strong></span><Link className="logout-link" to="/">Cerrar sesión <span aria-hidden="true">↗</span></Link></header>
        <div className="dashboard-content">
          <p className="eyebrow">MIÉRCOLES · UN DÍA PARA AVANZAR</p>
          <h1>¡Hola! <span className="wave">✳</span></h1>
          <p className="dashboard-lead">Este es tu punto de partida. Un paso a la vez.</p>
          <section className="welcome-panel"><div><span className="welcome-label">TU ESPACIO, TU RITMO</span><h2>Las grandes ideas<br />se hacen en equipo.</h2><p>Organiza las tareas y celebra cada avance.</p><Link className="button button-light" to="/quienes-somos">Conoce al equipo <span>→</span></Link></div><div className="welcome-graphic"><span className="graphic-star">✳</span><span className="graphic-circle" /><span className="graphic-pill">IDEAR · CREAR · COMPARTIR</span></div></section>
          <div className="section-heading"><div><h2>Tu tablero</h2><p>Una vista rápida de lo que sigue.</p></div><span className="task-count">3 tareas</span></div>
          <section className="task-list" aria-label="Tareas de muestra">{tasks.map((task, index) => <article className="task-row" key={task.title}><span className={`task-number ${task.tone}`}>0{index + 1}</span><div className="task-copy"><h3>{task.title}</h3><p>{task.detail}</p></div><span className={`task-status ${task.tone}`}>{task.label}</span></article>)}</section>
          <p className="dashboard-disclaimer">Panel demostrativo para la práctica de React Router. No requiere autenticación.</p>
        </div>
      </main>
    </div>
  );
}
