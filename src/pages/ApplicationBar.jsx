import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#0845ac',
      },
      secondary: {
        main: '#f58011',
      },
    },
  }
);

const ApplicationBar = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static"  >
    <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
        Administrador de cuentas Escritorio Web.
        </Typography>
        <Typography >
          Agregar Usuarios
        </Typography>

    </Toolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default ApplicationBar