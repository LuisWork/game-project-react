import { Listado } from "./Components/Listado";
import { Agregar } from "./Components/Crear";
import { Buscar } from "./Components/Buscar";

function App() {
  return (
  <div className="layout">
    {/* Cabecera */}
    <header className="header">
      <div className="logo">
        <div className="play"></div>
      </div>
      <h1>Mis Juegos</h1>
    </header>
    <nav className="nav">
      {/* Barra de navegacion */}
      <ul>
        <li><a href="/#">Inicio</a></li>
        <li><a href="/#">Juegos</a></li>
        <li><a href="/#">Blog</a></li>
        <li><a href="/#">Contacto</a></li>
      </ul>
    </nav>
    <section className="content">
      {/* Aqui van el listado de Juegos */}
    <Listado/>
    </section>
    {/* Barra Lateral */}
    <aside className="lateral">
      <Buscar/>
      <Agregar/>
      
    </aside>
    {/* Pie de pagina */}
    <footer className="footer">
      &copy; Master en JavaScript ES12 y TypeScript - <a href="https://www.google.cl">Google</a>
    </footer>
  </div>
  );
}

export default App;
