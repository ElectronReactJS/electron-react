// src/pages/users/UserGrid.Finder.tsx
import * as React from 'react'
import Paper from '../../components/wrap/surfaces/Paper'
import ButtonRefresh from '../../components/wrap/inputs/ButtonRefresh'
import TextFieldWrapper from '../../components/wrap/inputs/TextField'
import SearchIcon from '../../components/ext/displays/IconSearchExt'
import Box from '../../components/wrap/layouts/Box'
import DataGrid from '../../components/ext/displays/DataGridExt'
import GridColDef from '../../components/ext/displays/GridColDefExt'
import {User} from './User'

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
  const [value, setValue] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

  const onChangeHandler = (e: {target: {value: React.SetStateAction<string>}}) => {
    setValue(e.target.value)
    setErrorMessage('')
  }

  return (
    <Paper title='Users' button={<ButtonRefresh onClick={handleOnRefresh} />}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '85%',
          padding: '3px'
        }}
      >
        <TextFieldWrapper
          required
          label='Search by typing...'
          placeholder='Search by typing...'
          errorMessage={errorMessage}
          onChange={onChangeHandler}
          icon={<SearchIcon />}
          value={value}
        />
      </Box>
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
