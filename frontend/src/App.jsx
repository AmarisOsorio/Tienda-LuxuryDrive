import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import SobreNosotros from './pages/SobreNosotros'


function App() {

  return (
    <>
    
    <Navbar />
      <Router>
        
          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route path="/SobreNosotros" element={<SobreNosotros />} />
         </Routes>
      </Router>
    </>

  )
}

export default App
