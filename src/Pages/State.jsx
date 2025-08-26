
import { useState } from 'react';
import './Pages.css';

const State = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');

  return (
    <div className="page">
      <h1>Estado (State)</h1>
      
      <div className="section">
        <h2>¿Qué es el Estado?</h2>
        <p>
          El estado en React representa los datos que pueden cambiar durante la vida de un 
          componente. A diferencia de las props, el estado es mutable y gestionado internamente 
          por el componente. Cuando el estado cambia, React re-renderiza el componente.
        </p>
        <img 
          src="https://4.bp.blogspot.com/-_NbQfirx9LA/UhkPaFI-otI/AAAAAAAACmQ/aXj7by5y0Ec/s1600/diagrama-de-estados.png" 
          alt="Diagrama de estado en React" 
          className="img"
        />
      </div>
      
      <div className="section">
        <h3>Ejemplo de código</h3>
        <pre className="code">
{`import { useState } from 'react';

const Contador = () => {
  // Declaración del estado
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
      
      <input 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        placeholder="Escribe tu nombre" 
      />
      <p>Hola, {nombre}</p>
    </div>
  );
};`}
        </pre>
      </div>
      
      <div className="section">
        <h3>Ejemplo en vivo:</h3>
        <div>
          <h2>Contador: {contador}</h2>
          <div className="button-group">
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            <button onClick={() => setContador(0)}>Reiniciar</button>
          </div>
          
          <div>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              placeholder="Escribe tu nombre" 
            />
            <p>Hola, <strong>{nombre || 'desconocido'}</strong>!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;