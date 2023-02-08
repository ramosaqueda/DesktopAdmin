import React, { useState, useEffect } from 'react';
import DataUsers from '../data/records.json'; //luego sera a partir de la API
import { DataGrid } from '@mui/x-data-grid';



 

const UserTable = () => {

  
  const [rows, setRows] = useState([]);
  
  

  useEffect( () => {
    fetch ("/data/records.json")
    .then(res => res.json())
    .then(resp=> {setRows(resp)})
    console.log(rows);
    
  },[]);



  const columns = [
    
    { field: 'rut', headerName: 'RUT', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'unidad', headerName: 'Unidad', width: 130 } 
  ];
 
 
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserTable