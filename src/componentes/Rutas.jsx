// componentes/Rutas.jsx
import { Routes, Route } from "react-router-dom";
import  Inicio from "../pages/Inicio";
import Props from "../pages/Props";
import State from "../pages/State";
import Lifecycle from "../Pages/Lifecycle";
import Hooks from "../Pages/Hooks";
import VirtualDOM from "../pages/VirtualDOM";
import Redux from "../pages/Redux";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/props" element={<Props />} />
      <Route path="/state" element={<State />} />
      <Route path="/lifecycle" element={<Lifecycle />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/virtualdom" element={<VirtualDOM />} />
      <Route path="/redux" element={<Redux />} />
    </Routes>
  );
};

export default Rutas;