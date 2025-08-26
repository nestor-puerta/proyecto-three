import './Pages.css';

const Props = () => {
  // Componente que usa props
  const TarjetaUsuario = ({ nombre, email, edad }) => {
    return (
      <div className="card">
        <h3>{nombre}</h3>
        <p>Email: {email}</p>
        <p>Edad: {edad}</p>
      </div>
    );
  };

  return (
    <div className="page">
      <h1>Props (Propiedades)</h1>
      
      <div className="section">
        <h2>¿Qué son las Props?</h2>
        <p>
          Las props (propiedades) son la forma en que los componentes de React se comunican 
          entre sí. Son inmutables y se pasan de componentes padres a componentes hijos, 
          permitiendo la transferencia de datos y configuración.
        </p>
        <img 
          src="https://mms.businesswire.com/media/20190711005651/en/732443/23/Props-Horizontal-color.jpg" 
          alt="Diagrama de props en React" 
          className="img"
        />
      </div>
      
      <div className="section">
        <h3>Ejemplo de código</h3>
        <pre className="code">
{`// Componente que recibe props
const TarjetaUsuario = ({ nombre, email, edad }) => {
  return (
    <div className="tarjeta-usuario">
      <h3>{nombre}</h3>
      <p>Email: {email}</p>
      <p>Edad: {edad}</p>
    </div>
  );
};

// Uso del componente con props
const App = () => {
  return (
    <div>
      <TarjetaUsuario 
        nombre="Ana García" 
        email="ana@ejemplo.com" 
        edad={28} 
      />
    </div>
  );
};`}
        </pre>
      </div>
      
      <div className="section">
        <h3>Ejemplo en vivo:</h3>
        <div className="grid">
          <TarjetaUsuario nombre="Ana García" email="ana@ejemplo.com" edad={28} />
          <TarjetaUsuario nombre="Carlos López" email="carlos@ejemplo.com" edad={32} />
          <TarjetaUsuario nombre="María Rodríguez" email="maria@ejemplo.com" edad={24} />
        </div>
      </div>
    </div>
  );
};

export default Props;