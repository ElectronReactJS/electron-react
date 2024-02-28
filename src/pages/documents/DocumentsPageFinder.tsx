
// src/pages/documents/DocumentsPageFinder.tsx
import Paper from '../../components/extends/surfaces/PaperWrapper';
import Typography from '../../components/extends/displays/TypographyWrapper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
      field: 'Document',
      headerName: 'Document',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { Document: 1, fullName: 'Snow' },
  ];

const DocumentsPageFinder: React.FC<any> = () => { 
    const label = "Documents Finder";

    return (
        <Paper elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    {label}
                </Typography>    
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
        </Paper>
    );
  };
  
  export default DocumentsPageFinder;