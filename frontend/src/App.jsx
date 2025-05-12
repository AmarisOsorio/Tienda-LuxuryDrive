import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import ContactPage from './pages/Contactanos'
import Servicios from './pages/Servicios'
import SobreNosotros from './pages/SobreNosotros'
import Terminos from './pages/Terminos'
import Dashboard from './pages/Dashboard'
import Ventas from './pages/Ventas'
import Importaciones from './pages/Importaciones'



function App() {

  return (
    <>
    
    <Navbar />
      <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contactanos" element={<ContactPage />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/SobreNosotros" element={<SobreNosotros />} />
            <Route path="/Terminos" element={<Terminos />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Ventas" element={<Ventas />} />
            <Route path="/Importaciones" element={<Importaciones />} />
         </Routes>
      </Router>

      

      <Footer />
    </>


  )
}

export default App
