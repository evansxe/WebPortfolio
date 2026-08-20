import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import ScrollManager from './components/ScrollManager'
import { ThemeContext, useThemeState } from './hooks/useTheme'
import Home from './pages/Home'

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const themeState = useThemeState()

  return (
    <ThemeContext.Provider value={themeState}>
      <ScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeContext.Provider>
  )
}
