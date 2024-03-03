// src/pages/documents/DocumentsPageViewer.tsx
import Paper from '../../components/ext/surfaces/PaperExt'
import Typography from '../../components/ext/displays/TypographyExt'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {CardActionArea, CardActions} from '@mui/material'
import Box from '../../components/wrap/layouts/Box'
import ButtonEdit from '../../components/wrap/inputs/ButtonEdit'

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16
}

const DocumentsPageViewer: React.FC<any> = () => {
  const label = 'Documents Viewer'

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Ajuste a altura conforme necessário
        padding: '20px' // Adiciona um pouco de padding para evitar que o Card toque as bordas do Paper
      }}
    >
      <Box>
        <Typography
          color='inherit'
          variant='h5'
          component='h1'
          sx={{width: '100%', textAlign: 'center'}}
        ></Typography>
      </Box>
      <Card sx={{maxWidth: 700, margin: 'auto'}}>
        {' '}
        {/* Adiciona margin auto para centralizar horizontalmente */}
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              {label}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
              hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
              velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
              Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
              viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
              Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
              at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
              ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <br />
            <Typography variant='h5' sx={{mb: 1.5}} color='text.secondary'>
              Second section
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
              hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
              velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
              Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
              viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
              Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
              at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
              ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <br />
            <CardActions>
              <ButtonEdit />
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  )
}

export default DocumentsPageViewer
