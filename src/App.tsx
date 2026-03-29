import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Colaboradores from './pages/Colaboradores'
import Home from './pages/Home'
import Projeto from './pages/Projeto'
import Servico from './pages/Servico'
import Sobre from './pages/Sobre'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
