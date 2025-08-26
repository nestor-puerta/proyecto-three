// pages/Hooks.jsx
import { useState, useEffect, useContext, createContext } from 'react';
import './Pages.css';

// Crear un contexto para el ejemplo
const MiContexto = createContext();

// Componente que usa useContext
const ComponenteConContexto = () => {
  const contexto = useContext(MiContexto);
  
  return (
    <div>
      <p>Usuario: {contexto.usuario}</p>
      <p>Rol: {contexto.rol}</p>
    </div>
  );
};

const Hooks = () => {
  const [contador, setContador] = useState(0);
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simular carga de datos con useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDatos(['Item 1', 'Item 2', 'Item 3']);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Valor para el contexto
  const valorContexto = { usuario: "Juan", rol: "admin" };

  return (
    <div className="page">
      <h1>Hooks de React</h1>
      
      <div className="section">
        <h2>¿Qué son los Hooks?</h2>
        <p>
          Los Hooks son funciones que permiten "enganchar" el estado y el ciclo de vida de 
          React desde componentes funcionales. Fueron introducidos en React 16.8 y permiten 
          usar estado y otras características de React sin escribir una clase.
        </p>
        <img 
          src="https://ecdisis.com/wp-content/uploads/2021/02/Que-son-los-Hooks-de-WordPress.png" 
          alt="Hooks de React" 
          className="img"
        />
      </div>
      
      <div className="section">
        <h3>Hooks más utilizados</h3>
        <div className="grid">
          <div className="card">
            <h4>useState</h4>
            <pre className="code-small">
{`const [estado, setEstado] = useState(valorInicial);`}
            </pre>
            <p>Gestiona el estado local del componente.</p>
          </div>
          
          <div className="card">
            <h4>useEffect</h4>
            <pre className="code-small">
{`useEffect(() => {
  // Efecto
  return () => {
    // Cleanup
  };
}, [dependencias]);`}
            </pre>
            <p>Maneja efectos secundarios y ciclo de vida.</p>
          </div>
          
          <div className="card">
            <h4>useContext</h4>
            <pre className="code-small">
{`const valor = useContext(MiContexto);`}
            </pre>
            <p>Accede al valor de un contexto.</p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h3>Ejemplos en vivo:</h3>
        
        <div>
          <h4>useState y useEffect</h4>
          <p>Contador: {contador}</p>
          <button onClick={() => setContador(contador + 1)}>
            Incrementar
          </button>
          
          <h4>useEffect con carga de datos:</h4>
          {loading ? (
            <p>Cargando datos...</p>
          ) : (
            <ul>
              {datos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        
        <div>
          <h4>useContext</h4>
          <MiContexto.Provider value={valorContexto}>
            <ComponenteConContexto />
          </MiContexto.Provider>
        </div>
      </div>
    </div>
  );
};

export default Hooks;