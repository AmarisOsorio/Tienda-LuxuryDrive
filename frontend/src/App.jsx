import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'


function App() {

  return (
    <>
    
    <Navbar />
      <Router>
        
          <Routes>
            <Route path="/" element={<Inicio />} />
         </Routes>
      </Router>
    </>

  )
}

export default App
