// src/pages/users/UserGrid.Finder.tsx
import * as React from 'react'
import Paper from '../../components/wrap/surfaces/Paper'
import {User} from './User'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import ButtonRefresh from '../../components/wrap/inputs/ButtonRefresh'
import Box from '../../components/wrap/layouts/Box'

const columns: GridColDef[] = [
  {field: 'id', headerName: 'External ID', width: 150},
  {
    field: 'userName',
    headerName: 'Username',
    width: 300,
    editable: false
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 120,
    editable: false
  },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    width: 120,
    editable: false
  }
]

interface UserGridFinderProps {
  users: User[]
  handleOnRefresh: () => void
}

const UserGridFinder: React.FC<UserGridFinderProps> = ({users, handleOnRefresh}) => {
  return (
    <Paper title="Users" button={<ButtonRefresh onClick={handleOnRefresh} />}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '3px'
        }}
      >
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </Paper>
  )
}

export default UserGridFinder
