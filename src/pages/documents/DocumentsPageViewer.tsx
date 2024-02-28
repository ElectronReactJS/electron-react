// src/pages/documents/DocumentsPageViewer.tsx
import Paper from '../../components/extends/surfaces/PaperWrapper'
import Typography from '../../components/extends/displays/TypographyWrapper'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const DocumentsPageViewer: React.FC<any> = () => {
  const label = 'Documents Viewer'

  return (
    <Paper elevation={3}>
      <Typography color='inherit' variant='h5' component='h1'>
        {label}
      </Typography>
      <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo
        vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque
        non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
        morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est
        ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa
        tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        sapien faucibus et molestie ac.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
  )
}

export default DocumentsPageViewer
