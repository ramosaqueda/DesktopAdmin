import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import menu from './pages/menu'
import ApplicationBar from './pages/ApplicationBar'
import RutFuncionario from './components/RutFuncionario'
import FormFuncionario from './components/FormFuncionario'
import TableUsers from './components/TableUsers'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <ApplicationBar />
            <RutFuncionario />
            <FormFuncionario />

            <TableUsers />
        </>
    )
}

export default App
