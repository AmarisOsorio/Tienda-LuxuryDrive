import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import ContactPage from './pages/Contactanos'


function App() {

  return (
    <>
    
    <Navbar />
      <Router>
        
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contactanos" element={<ContactPage />} />
         </Routes>
      </Router>
    </>

  )
}

export default App
