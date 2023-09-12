import { Card, Col, Button } from "react-bootstrap"
import useBebida from "../hooks/useBebidas"
const Bebida = ({bebida}) => {
    const {handleModalClick, handleBebidaClick} = useBebida()
  return (
    <Col md={6} lg={3}>
        <Card className="mb-4">
            <Card.Img
                variant="top"
                src={bebida.strDrinkThumb}
                alt={bebida.strDrink}
            />

            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button onClick={() =>{
                    handleModalClick()
                    handleBebidaClick(bebida.idDrink)
                } } variant="warning" className="mt-2 w-100 text-uppercase">
                    Ver receta
                </Button>
            </Card.Body>
            
        </Card>
    </Col>
  )
}

export default Bebida