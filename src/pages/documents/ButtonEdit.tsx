
// src/pages/documents/ButtonEdit.tsx
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

export default function ButtonEdit() {

  return (
        <Fab sx={fabStyle} aria-label='Edit' color='secondary' >
            <EditIcon />
        </Fab>
  );
}