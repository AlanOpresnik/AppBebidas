import {useContext} from 'react'
import bebidasContext from '../context/bebidasProvider'
const useBebida = () => {
    return useContext(bebidasContext)
}

export default useBebida