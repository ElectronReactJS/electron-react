// src/pages/users/UsersPageFinder.tsx
import Box from '../../components/extends/layouts/Box'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import {styled, alpha} from '@mui/material/styles'
import {Toolbar} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'userName',
    headerName: 'Username',
    width: 350,
    editable: false
  }
]

const rows = [
  {id: 1, userName: 'agros@example.com'},
  {id: 2, userName: 'antonio@example.com'},
  {id: 3, userName: 'lucas@example.com'},
  {id: 4, userName: 'felipe@example.com'},
  {id: 5, userName: 'thiago@example.com'},
  {id: 6, userName: 'guilherme@example.com'},
  {id: 7, userName: 'gabriel@example.com'},
  {id: 8, userName: 'jp@example.com'},
  {id: 9, userName: 'fernanda@example.com'}
]

const UserPageFinder: React.FC<any> = () => {
  return (
    <Box sx={{width: '100%'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder='Search…' inputProps={{'aria-label': 'search'}} />
        </Search>
      </Toolbar>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      
    </Box>
  )
}

export default UserPageFinder
