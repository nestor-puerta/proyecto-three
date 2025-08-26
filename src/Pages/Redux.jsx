
import { useState } from 'react';
import './Pages.css';

// Simulación simple de Redux
const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];
  
  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => listeners = listeners.filter(l => l !== listener);
    }
  };
};

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    case 'DECREMENT': return { ...state, count: state.count - 1 };
    case 'RESET': return { ...state, count: 0 };
    default: return state;
  }
};

// Store
const store = createStore(counterReducer, { count: 0 });

const Redux = () => {
  const [count, setCount] = useState(store.getState().count);
  
  useState(() => {
    return store.subscribe(() => setCount(store.getState().count));
  }, []);

  return (
    <div className="page">
      <h1>Redux</h1>
      
      <div className="section">
        <h2>¿Qué es?</h2>
        <p>Librería para gestión predecible del estado en aplicaciones JavaScript.</p>
        <img src="https://lovtechnology.com/wp-content/uploads/2024/05/Conceptos-principales-de-Redux.jpg" alt="Redux" className="img" />
      </div>
      
      <div className="section">
        <h2>¿Cómo funciona?</h2>
        <p>Flujo unidireccional: Acciones → Reducer → Store → Vista</p>
        <ol>
          <li><strong>Store:</strong> Estado global único</li>
          <li><strong>Actions:</strong> Describen qué pasó</li>
          <li><strong>Reducers:</strong> Funciones puras que actualizan el estado</li>
        </ol>
      </div>
      
      <div className="section">
        <h3>Ejemplo de código</h3>
        <pre className="code">
{`// Acciones
const incrementAction = { type: 'INCREMENT' };

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Uso
store.dispatch(incrementAction);`}
        </pre>
      </div>
      
      <div className="section">
        <h3>Ejemplo en vivo</h3>
        <div>
          <h2>Contador: {count}</h2>
          <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
          <button onClick={() => store.dispatch({ type: 'RESET' })}>Reiniciar</button>
          <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Redux;