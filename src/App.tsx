import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login/login'
import Signup from './pages/auth/signup/signup'
import NotFound from './pages/not-found/NotFound'
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute'
import Home from './pages/home/Home'
import AuthProvider from './context/AuthProvider.tsx'
import ToastProvider from './context/ToastProvider.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
