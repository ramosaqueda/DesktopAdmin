import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormLabel from '@mui/material/FormLabel'

import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Switch from '@mui/material/Switch'

const FormFuncionario = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        })
    }
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'row',
                gap: '20px',
            }}
        >
            <TextField
                id="text_name"
                label="Nombre Completo"
                variant="outlined"
            />
            <FormControl variant="outlined" sx={{ minWidth: 220 }}>
                <InputLabel id="unidad">Unidad</InputLabel>
                <Select labelId="unidad" id="select-unidad" label="Unidad">
                    <MenuItem value={401}>La Serena</MenuItem>
                    <MenuItem value={402}>Coquimbo</MenuItem>
                    <MenuItem value={403}>Ovalle</MenuItem>
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
        </Box>
    )
}

export default FormFuncionario
