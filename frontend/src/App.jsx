import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import ContactPage from './pages/Contactanos'
import Servicios from './pages/Servicios'
import SobreNosotros from './pages/SobreNosotros'
import Terminos from './pages/Terminos'




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
         </Routes>
      </Router>

      

      <Footer />
    </>


  )
}

export default App
