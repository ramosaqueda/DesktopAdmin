import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



const FormFuncionario = () => {
  return (
    <Box
        sx={{
            marginTop: 8,
            display: 'flex',            
            alignItems: 'start',
            flexDirection: 'row',
            gap:'10px',
            
        }}
    > 
        <TextField id="text_name" label="Nombre Completo" variant="outlined" />
        <FormControl variant='outlined' sx={{ minWidth: 220 }}  >                
                <InputLabel id="unidad">Unidad</InputLabel>
                <Select
                        labelId="unidad"  
                        id="select-unidad"  
                        label="Unidad"
                    
                    >
                        <MenuItem value={401}>La Serena</MenuItem>
                        <MenuItem value={402}>Coquimbo</MenuItem>
                        <MenuItem value={403}>Ovalle</MenuItem>
                    </Select>
        </FormControl>
        <TextField id="text_username" label="UserName (Windows)" variant="outlined" />
        <TextField id="text_saf" label="SAF" variant="outlined" />

    </Box>
  )
}

export default FormFuncionario