import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import menu from './pages/menu'
import ApplicationBar from './pages/ApplicationBar'

import FormFuncionario from './components/FormFuncionario'
import TableUsers from './components/TableUsers'

 import { CssBaseline } from '@mui/material'
 import UserTable from './pages/UserTable'
 
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        
            <ApplicationBar />
            <UserTable />
          
           
        </>
    )
}

export default App
