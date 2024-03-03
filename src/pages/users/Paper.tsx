// src/pages/users/Page.tsx
import * as React from 'react'
import {useTheme} from '../../components/ext/styles/StylesExt'
import PaperWrapper from '../../components/ext/surfaces/PaperExt'
import {PaperTheme} from './Paper.Theme'
import Typography from '../../components/ext/displays/TypographyExt'
import Box from '../../components/wrap/layouts/BoxWrapper'

interface PaperProps {
  title?: string
  icon?: string
  children?: React.ReactNode
  button?: React.ReactNode
}

const Paper: React.FC<PaperProps> = ({title, icon, children, button}) => {
  const currentTheme = useTheme()
  const paperStyles = PaperTheme(currentTheme)
  return (
    <PaperWrapper sx={paperStyles} elevation={3}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          padding: '3px'
        }}
      >
        {icon}
        <Typography color='inherit' variant='h5' component='h1' margin={5}>
          {title}
        </Typography>
        {children}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%'
        }}
      >
        {button ? button : <Box sx={{width: '100%', height: '32px'}} />}
      </Box>
    </PaperWrapper>
  )
}

export default Paper
