import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import cuentas from '../data/records.json'

const RutFuncionario = ({children}) => {
    const [rut, SetRut] = useState()

    const RutChange = (e) => {
        e.preventDefault()
        console.log(e.target.rut.value)
        
    }

    return (

        <div>
            {children (rut, RutChange)}
        </div>
        
     )
}

export default RutFuncionario
