import { useState } from "react"
import { Modal, Image } from "react-bootstrap"
import useBebida from "../hooks/useBebidas"
const ModalBebida = () => {
    const {modal, handleModalClick, receta, cargando} = useBebida()

const mostrarIngredientes = () => {
    let ingredientes = []
     for (let i = 1; i < 16 ; i++) {
        if(receta[`strIngredient${i}`]){
            ingredientes.push(<li>{receta[`strIngredient${i}`]} {receta [`strMeasure${i}`]}</li>)
        }
    }
    return ingredientes
}

    return (
    !cargando && (<Modal show={modal} onHide={handleModalClick}>
    <Image 
    alt={receta.strDrink}
    src={receta.strDrinkThumb}/>
    <Modal.Header closeButton>
      <Modal.Title>{receta.strDrink}</Modal.Title>
    </Modal.Header>
        <Modal.Body>
            <div key={receta.strDrink} className="p-3">
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredientes y cantidades</h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>
    </Modal>
  ))
}

export default ModalBebida