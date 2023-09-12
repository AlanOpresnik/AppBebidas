import {useContext} from 'react'
import categoriaContext from '../context/categoriasProvider'

const useCategoria = () => {
    return useContext(categoriaContext)
}

export default useCategoria