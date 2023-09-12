import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategoria from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";
import { useState } from "react";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const { categorias } = useCategoria();
  const {consultarBebida } = useBebidas()
  const [alerta,  setAlerta] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();

  if(Object.values(busqueda).includes("")){
    setAlerta('todos los campos son obligatorios')
    return
  }
  setAlerta("")
  consultarBebida(busqueda)
}

  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
    {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre de bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej: tequila, vodka..."
              name="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                   ...busqueda, 
                   [e.target.name] : e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria de la bebida</Form.Label>
            <Form.Select
             value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                   ...busqueda, 
                   [e.target.name] : e.target.value })
              }
             id="categoria" name="categoria">
              <option>---Seleccione categoria---</option>
              {categorias.map((categoria) => (
                <option
                  value={categoria.strCategory}
                  key={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button type="submit" variant="danger" className="text-uppercase w-100">
            Buscar bebida
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
