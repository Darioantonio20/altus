import { Suspense, lazy } from 'react'
import './App.css'

// Lazy load the main landing page for better performance
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'))

function App() {
  return (
    <div className="app-container">
      <Suspense fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-dark">
          <div className="text-primary text-2xl">Cargando...</div>
        </div>
      }>
        <LandingPage />
      </Suspense>
    </div>
  )
}

export default App
