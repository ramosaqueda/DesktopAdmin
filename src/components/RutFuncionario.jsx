import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import cuentas from '../data/records.json'

const RutFuncionario = () => {
    const [rut, SetRut] = useState()

    const handleChange = (e) => {
        e.preventDefault()
        SetRut = e.target.TextRut.value
    }

    return (
        <form onSubmit={handleChange}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    gap: '30px',
                }}
            >
                <TextField
                    name="TextRut"
                    id="outlined-basic"
                    label="RUT Funcionario"
                    variant="outlined"
                    value={rut}
                />
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Buscar
                </Button>
            </Box>
        </form>
    )
}

export default RutFuncionario
