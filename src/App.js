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
      {/* Aqui van los Juegos */}
      <article className="game-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">LuisWork.github.io</p>
        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
      <article className="game-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">LuisWork.github.io</p>
        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
      <article className="game-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">LuisWork.github.io</p>
        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
      <article className="game-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">LuisWork.github.io</p>
        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
    </section>
    {/* Barra Lateral */}
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input type="text"/>
          <button>Buscar</button>
        </form>
      </div>
      <div className="add">
        <h3 className="title">Agregar Juego</h3>
        <form>
          <input type="text" placeholder="Titulo"/>
          <textarea placeholder="Descripcion"></textarea>
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    </aside>
    {/* Pie de pagina */}
    <footer className="footer">
      &copy; Master en JavaScript ES12 y TypeScript - <a href="https://www.google.cl">Google</a>
    </footer>
  </div>
  );
}

export default App;
