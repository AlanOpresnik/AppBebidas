import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriaProvider } from "./context/categoriasProvider";
import { BebidasProvider } from "./context/bebidasProvider";
import ListadoBebidas from "./components/listadoBebidas";
import ModalBebida from "./components/ModalBebida";
function App() {
  return (
    <>
      <CategoriaProvider>
        <BebidasProvider>
          <header className="py-5">
            <h1>Buscador de bebidas</h1>
          </header>
          <Container>
          
            <Formulario />
            <ListadoBebidas/>
            <ModalBebida/>
          </Container>
        </BebidasProvider>
      </CategoriaProvider>
    </>
  );
}

export default App;
