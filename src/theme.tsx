// src/theme.tsx

import {createTheme, Theme} from './components/ext/styles/StylesExt'

interface ThemeProps {
  theme: Theme
}

const colorGreen = '#009739'
const colorBlueLghter = '#63ccff'
const colorBlueLght = '#4fc3f7'
const colorBlueDark = '#012169'
const colorDark = '#1976d2'
const colorGray = '#777777'
const colorGrayLight = '#f5f5f5'
const colorGrayDark = '#111111'
const colorPinkLight = '#FFB6C1'
const colorPinkDark = '#AA336A'
const colorPink = '#FF69B4'
const colorPinkBiud = '#DE3163'

const baseTheme = createTheme({
  palette: {
    primary: {
      light: colorGrayLight,
      main: colorGray,
      dark: colorGrayDark
    }
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colorGrayLight
        }
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
})

const theme = createTheme(baseTheme, {
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: baseTheme.spacing(1)
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: baseTheme.palette.common.white
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [baseTheme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(1)
        }
      }
    }
    // ... your other components
  },
  background: {
    image: `url(${require('./images/background-1920×1080.png')})`
  }
})

export default theme
