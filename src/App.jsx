import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar";
import Inicio from "./paginas/index";
import "./App.css";
import Recetas from "./paginas/recetas";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/recetas" element={<Recetas />} />
      </Routes>
    </Router>
  );
}
export default App;
