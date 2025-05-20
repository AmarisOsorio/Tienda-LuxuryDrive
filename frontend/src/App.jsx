import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import ContactPage from './pages/Contactanos'
import Servicios from './pages/Servicios'
import SobreNosotros from './pages/SobreNosotros'

import Login from './pages/Login'
import PasswordRecovery from './pages/RecuperacionContraseña'

import Terminos from './pages/Terminos'


import NavbarAdmin from './components/NavbarAdmin'
import MiPerfil from './pages/MiPerfil'




function App() {

         

  return (
    <>
    
    <Navbar/>
    <NavbarAdmin />
      <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contactanos" element={<ContactPage />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/SobreNosotros" element={<SobreNosotros />} />

           
            <Route path="/Terminos" element={<Terminos />} />
           

            

         </Routes>
      </Router>

      

      <Footer />
    </>


  )
}

export default App
