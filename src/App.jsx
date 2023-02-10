import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import menu from './pages/menu'
import ApplicationBar from './pages/ApplicationBar'

import AddUser from './components/AddUser'
import TableUsers from './components/TableUsers'

 import { CssBaseline } from '@mui/material'
 import UserTable from './pages/UserTable'
import { BrowserRouter,Routes ,Route  } from 'react-router-dom'
 
function App() {
    const [count, setCount] = useState(0)

    return (
        
            <BrowserRouter>
            <ApplicationBar />
            <Routes>
                <Route path="/" element={<menu />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/table" element={<TableUsers />} />
                <Route path="/user" element={<UserTable />} />
            </Routes>


            
            </BrowserRouter>
          
           
        
    )
}

export default App
