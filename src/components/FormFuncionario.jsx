import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormLabel from '@mui/material/FormLabel'

import Button from '@mui/material/Button'


import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Switch from '@mui/material/Switch'
import RutFuncionario from './RutFuncionario'


import dataUnidades from '../data/unidades.json';
import dataRecords from '../data/records.json';

const FormFuncionario = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false, 
    })

    const [unidad, setUnidad] = React.useState('')


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        })
    }

    const handleChangeUnidad = (event) => { 
              setUnidad(event.target.value)
    }

   

    return (
        <Box
            sx={{
                marginTop: 8,
                marginLeft:5,
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                gap: '70px',
                justifyContent: 'space-between',

            }}
        >
         <div>
            <RutFuncionario> 
                {
                    (rut, RutChange) => (                       
                            <form onSubmit={RutChange}>
                            <InputLabel id="lbl_rut">RUT</InputLabel>
                            <TextField type="text" name="rut" value={rut}    />
                            <Button variant="contained" type='submit'>Buscar</Button>
                            </form>
                    )
                }
            </RutFuncionario>
            </div>
            
            <div>
            <TextField
                id="text_name"
                label="Nombre Completo"
                variant="outlined"
            />
            <FormControl variant="outlined" sx={{ minWidth: 220 }}>
                <InputLabel id="unidad">Unidad</InputLabel>
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
            <TextField
                id="text_username"
                label="UserName (Windows)"
                variant="outlined"
            />
            <TextField id="text_saf" label="SAF" variant="outlined" />
            <div>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">
                        Asignación Especial
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={state.gilad}
                                    onChange={handleChange}
                                    name="gilad"
                                />
                            }
                            label="Pre Clasificación"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={state.jason}
                                    onChange={handleChange}
                                    name="jason"
                                />
                            }
                            label="Asignación"
                        />
                    </FormGroup>
                    <FormHelperText>Solo cuenta Fiscal</FormHelperText>
                </FormControl>
            </div>
            </div>
        </Box>
    )
}

export default FormFuncionario
