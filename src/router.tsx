// src/router.tsx
import theme from './theme'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from '@mui/material/styles'
import {MemoryRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/login/LoginPaper'
import DocumensFrame from './pages/documents/DocumentsFrame'
import UsersFrame from './pages/users/UsersFrame'

// Get the navigation element
const navigationElement = document.getElementById('navigation')
const root = createRoot(navigationElement)

// Render the first React component
if (navigationElement) {
  root.render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/documents' element={<DocumensFrame />} />
          <Route path='/users' element={<UsersFrame />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  )
}
