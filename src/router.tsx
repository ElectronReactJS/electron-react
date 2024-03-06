// src/router.tsx
import theme from './theme'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from './components/ext/styles/StylesExt'
import {MemoryRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/login/LoginPaper'
import DocumensFrame from './pages/documents/DocumentsFrame'
import UsersFrame from './pages/users/User.Frame'
import AIDocumentFrame from './pages/ai/document/AI.Document.Frame'

// Get the navigation element
const navigationElement = document.getElementById('navigation')
const root = createRoot(navigationElement)

// Render the first React component
if (navigationElement) {
  root.render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/aidocument']}>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/documents' element={<DocumensFrame />} />
          <Route path='/users' element={<AIDocumentFrame />} />
          <Route path='/aidocument' element={<UsersFrame />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  )
}
