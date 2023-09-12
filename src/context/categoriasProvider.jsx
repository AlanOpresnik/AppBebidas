import { useState, useEffect, createContext, Children } from "react";
import axios from "axios";
const categoriaContext = createContext()

const CategoriaProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const obtenerCategoria = async () => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const { data } = await axios(url)

            setCategorias(data.drinks)
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        obtenerCategoria()
    }, [])
    

    return (
        <categoriaContext.Provider value={{
            categorias,
        }}>
           {children}
        </categoriaContext.Provider>
    )
}

export {
    CategoriaProvider
}

export default categoriaContext