import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { 
    field: 'id', 
  headerName: 'ID', 
  width: 90 
},
  {
    field: 'nomeCompleto',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'cpf',
    headerName: 'ID',
    width: 150,
    editable: true,
  },
  {
    field: 'municipio',
    headerName: 'City',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'ano',
    headerName: 'Year',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'valorDisponibilizado',
    headerName: 'Amount',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, nomeCompleto: 'JOELMIR DE SOUSA DA SILVA', cpf: '***.550.613-**', municipio: 'BRASÍLIA', ano: '2023', valor: 3000.00},
  { id: 2, nomeCompleto: 'MARCELO CARDOSO DOS SANTOS', cpf: '***.966.996-**', municipio: 'MARINGÁ', ano: '2023', valor: 600.00},
  { id: 3, nomeCompleto: 'MARCOS ANTONIO CARDOSO DA SILVA', cpf: '***.669.949-**', municipio: 'TERESINA', ano: '2023', valor: 1200.00}
];

export default function DataGridAnual() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}