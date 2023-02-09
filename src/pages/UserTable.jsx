import React, { useState, useEffect } from 'react';
import DataUsers from '../data/records.json'; //luego sera a partir de la API
import { DataGrid } from '@mui/x-data-grid';



 

const UserTable = () => {

  
  const [rows, setRows] = useState([]);
  
  

  useEffect( () => {
    fetch ("/data/records.json")
    .then(res => res.json())
    .then(resp=> {setRows(resp)})
 
    
  },[]);



  const columns = [
    
    { field: 'rut', headerName: 'RUT', width: 170 },
    { field: 'nombre', headerName: 'Nombre', width: 330 },
    { field: 'cod_unidad', headerName: 'Unidad', width: 130 } 
  ];
 
 
  

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.rut}
      />
    </div>
  )
}

export default UserTable