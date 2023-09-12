import { useState, useEffect, createContext, Children } from "react";
import axios from "axios";
const bebidasContext = createContext();

const BebidasProvider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [bebidas, setBebidas] = useState([])
    const [bebidaId, setBebidaId] = useState('')
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)
    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            if(!bebidaId){
                return
            }
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const {data} = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            }finally{
                setCargando(false)
            }
        }
        obtenerReceta()
    },[bebidaId])
  const consultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?
      i=${datos.nombre}&c=${datos.categoria}`;
      const { data } = await axios(url);

      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal)
  }

  const handleBebidaClick = (id) => {
    setBebidaId(id)
  }

  return (
    <bebidasContext.Provider value={{
        consultarBebida,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaClick,
        receta,
        cargando,
    }}>{children}
    </bebidasContext.Provider>
  );
};

export { BebidasProvider };

export default bebidasContext;
