
import { useState, useEffect } from 'react';
import './Pages.css';

const Lifecycle = () => {
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log('Componente montado o actualizado');
    
    return () => {
      console.log('Componente desmontado o antes de actualizar');
    };
  }, [contador]);

  return (
    <div className="page">
      <h1>Ciclo de Vida de Componentes</h1>
      
      <div className="section">
        <h2>¿Qué es el Ciclo de Vida?</h2>
        <p>
          El ciclo de vida de un componente React se refiere a las diferentes etapas por las 
          que pasa un componente desde que se crea hasta que se destruye. En componentes de 
          clase, estos se gestionan con métodos específicos. En componentes funcionales, 
          se utiliza el hook useEffect.
        </p>
        <img 
          src="https://cdn.goconqr.com/uploads/node/image/80891278/desktop_f6c4ba2b-03cf-4310-8f9d-607ceb121ae5.png" 
          alt="Diagrama del ciclo de vida en React" 
          className="img"
        />
      </div>
      
      <div className="section">
        <h3>Equivalencia entre Class y Functional Components</h3>
        <div className="code-comparison">
          <div className="code-block">
            <h4>Componente de Clase</h4>
            <pre className="code">
{`componentDidMount() {
  console.log('Componente montado');
}

componentDidUpdate() {
  console.log('Componente actualizado');
}

componentWillUnmount() {
  console.log('Componente desmontado');
}`}
            </pre>
          </div>
          
          <div className="code-block">
            <h4>Componente Funcional</h4>
            <pre className="code">
{`useEffect(() => {
  console.log('Componente montado');
  return () => {
    console.log('Componente desmontado');
  };
}, []);

useEffect(() => {
  console.log('Componente actualizado');
});`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h3>Ejemplo en vivo (revisa la consola):</h3>
        <div>
          {visible && (
            <div>
              <h2>Contador: {contador}</h2>
              <button onClick={() => setContador(contador + 1)}>
                Incrementar
              </button>
            </div>
          )}
          <button onClick={() => setVisible(!visible)}>
            {visible ? 'Ocultar' : 'Mostrar'} componente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lifecycle;