// src/pages/users/UsersPageFinder.tsx
import Box from '../../components/extends/layouts/Box'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import {styled, alpha} from '@mui/material/styles'
import {Toolbar} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import ButtonNew from '../common/button/ButtonNew'

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
    headerName: 'Last name',
    width: 150,
    editable: true
  }
]

const rows = [
  {id: 1, userName: 'Snow'},
  {id: 2, userName: 'Lannister'},
  {id: 3, userName: 'Lannister'},
  {id: 4, userName: 'Stark'},
  {id: 5, userName: 'Targaryen'},
  {id: 6, userName: 'Melisandre'},
  {id: 7, userName: 'Clifford'},
  {id: 8, userName: 'Frances'},
  {id: 9, userName: 'Roxie'}
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
      <ButtonNew />
    </Box>
  )
}

export default UserPageFinder