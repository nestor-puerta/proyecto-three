import { useState } from 'react';
import './Pages.css';

const VirtualDOM = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <h1>Virtual DOM</h1>
      
      <div className="section">
        <h2>¿Qué es el Virtual DOM?</h2>
        <p>
          El Virtual DOM es una representación ligera en memoria del DOM real. React crea 
          un árbol de objetos que representa la interfaz de usuario, y cuando el estado 
          cambia, React crea un nuevo Virtual DOM y lo compara con la versión anterior 
          (proceso llamado "diffing"). Luego, actualiza solo las partes del DOM real que 
          han cambiado (proceso llamado "reconciliation").
        </p>
        <img 
          src="https://miro.medium.com/v2/resize:fit:1192/0*P3jCWson9b-_0x-6.png" 
          alt="Diagrama del Virtual DOM" 
          className="img"
        />
      </div>
      
      <div className="section">
        <h2>¿Cómo funciona?</h2>
        <ol>
          <li>Cuando el estado de un componente cambia, React crea un nuevo Virtual DOM.</li>
          <li>Compara este nuevo Virtual DOM con la versión anterior (diffing algorithm).</li>
          <li>Identifica qué partes han cambiado.</li>
          <li>Actualiza solo esas partes en el DOM real.</li>
          <li>Este proceso es mucho más rápido que manipular el DOM directamente.</li>
        </ol>
      </div>
      
      <div className="section">
        <h3>Ejemplo de cómo React optimiza con Virtual DOM</h3>
        <div className="code-container">
          <pre className="code-scroll">
{`// Sin Virtual DOM (manipulación directa del DOM)
function actualizarVistaDirecto(datos) {
  const lista = document.getElementById('mi-lista');
  lista.innerHTML = ''; // Limpiar toda la lista
  
  datos.forEach(item => {
    const elemento = document.createElement('li');
    elemento.textContent = item;
    lista.appendChild(elemento);
  });
  // Esto es ineficiente porque recrea todos los elementos
}

// Con Virtual DOM (React)
function MiLista({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
// React solo actualizará los elementos que cambiaron`}
          </pre>
        </div>
      </div>
      
      <div className="section">
        <h3>Ejemplo en vivo:</h3>
        <div className="virtual-dom-example">
          <div className="input-group">
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              placeholder="Nuevo item" 
            />
            <button onClick={addItem}>Agregar</button>
          </div>
          
          <ul className="items-list">
            {items.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => removeItem(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          
          <p className="explanation break-word">
            <strong>Nota:</strong> Abre las herramientas de desarrollo y observa cómo 
            solo los elementos modificados se actualizan en el DOM real, gracias al 
            Virtual DOM de React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualDOM;