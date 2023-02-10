import { FormGroup, FormControl,InputLabel,Input,TextField, FormLabel, FormHelperText } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import React from 'react'

import dataUnidades from '../data/unidades.json';
import styled from '@mui/material'; 

const Container = styled('FormGroup')`
 
  background-color:#000
`



const AddUser = () => {
    const [unidad, setUnidad] = React.useState('')
    const handleChangeUnidad = (event) => { 
        setUnidad(event.target.value)
}

  return (
    <Container>
    <FormGroup>
            <FormControl>
                <TextField type="text" 
                    name="rut"    
                    label="R.U.N"
                    variant="outlined"   
                />
            </FormControl>
            <FormControl>
                <TextField
                    id="text_name"
                    label="Nombre Completo"
                    variant="outlined"
                />
            </FormControl>
            <FormControl>
 
                <Select 
                    labelId="unidad" 
                    id="select-unidad" 
                    value={unidad} 
                    label="Unidad"  
                    onChange={handleChangeUnidad}            
                >

                    {dataUnidades.map((u) => (<MenuItem id  ={u.cod_unidad} value={u.cod_unidad}>{u.gls_unidad}</MenuItem>))}
                </Select>
            </FormControl>


    </FormGroup>    
    </Container>
  )
}

export default AddUser