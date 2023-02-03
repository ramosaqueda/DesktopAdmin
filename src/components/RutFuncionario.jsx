import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


const RutFuncionario = () => {
  return (
 
    <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            gap:'30px',
        }}
      > 
              <TextField id="outlined-basic" label="RUT Funcionario" variant="outlined" />
              <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Buscar</Button>


    </Box>
   
  )
}

export default RutFuncionario