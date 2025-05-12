import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import ContactPage from './pages/Contactanos'
import Servicios from './pages/Servicios'

import SobreNosotros from './pages/SobreNosotros'
import Footer from './components/Footer'
import Login from './pages/Login'
import PasswordRecovery from './pages/RecuperacionContraseña'



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
            <Route path="/Login" element={<Login/>} />
            <Route path="/RecuperacionContraseña" element={<PasswordRecovery />} />

         </Routes>
      </Router>

      

      <Footer />
    </>


  )
}

export default App
