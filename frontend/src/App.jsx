import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
<<<<<<< HEAD
import ContactPage from './pages/Contactanos'
=======
import Servicios from './pages/servicios'
>>>>>>> 4c4448f38fe4c7c632df484a4c5f308d7a36504f


function App() {

  return (
    <>
    
    <Navbar />
      <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
<<<<<<< HEAD
            <Route path="/contactanos" element={<ContactPage />} />
=======
            <Route path="/servicios" element={<Servicios />} />
>>>>>>> 4c4448f38fe4c7c632df484a4c5f308d7a36504f
         </Routes>
      </Router>
    </>

  )
}

export default App
