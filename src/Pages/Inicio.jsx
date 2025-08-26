
import { Link } from 'react-router-dom';
import './Pages.css';

const Inicio = () => {
  return (
    <div className="page">
      <h1>Conceptos Fundamentales de React</h1>
      
      <div className="section">
        <p>
          Bienvenido a este proyecto educativo que explica los conceptos fundamentales de React. 
          A través de las siguientes páginas, podrás comprender los pilares que hacen de React 
          una de las librerías más populares para el desarrollo de interfaces de usuario.
        </p>
        <img 
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
          alt="Logo de React" 
          className="img"
        />
      </div>
      
      <div className="section">
        <h2>Conceptos que exploraremos:</h2>
        <div className="grid">
          <Link to="/props" className="card">
            <h3>Props</h3>
            <p>Cómo pasar información entre componentes</p>
          </Link>
          
          <Link to="/state" className="card">
            <h3>State</h3>
            <p>Manejo de estados locales en componentes</p>
          </Link>
          
          <Link to="/lifecycle" className="card">
            <h3>Ciclo de Vida</h3>
            <p>Fases de componentes y hooks equivalentes</p>
          </Link>
          
          <Link to="/hooks" className="card">
            <h3>Hooks</h3>
            <p>useState, useEffect, useContext y más</p>
          </Link>
          
          <Link to="/virtualdom" className="card">
            <h3>Virtual DOM</h3>
            <p>Funcionamiento interno y ventajas</p>
          </Link>
          
          <Link to="/redux" className="card">
            <h3>Redux</h3>
            <p>Gestión de estado global</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;