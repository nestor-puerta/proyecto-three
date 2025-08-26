
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/" className="menu-link">Inicio</Link>
      <Link to="/props" className="menu-link">Props</Link>
      <Link to="/state" className="menu-link">State</Link>
      <Link to="/lifecycle" className="menu-link">Ciclo de Vida</Link>
      <Link to="/hooks" className="menu-link">Hooks</Link>
      <Link to="/virtualdom" className="menu-link">Virtual DOM</Link>
      <Link to="/redux" className="menu-link">Redux</Link>
    </nav>
  );
};

export default Menu;