import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import ContactPage from './pages/Contactanos';
import Servicios from './pages/Servicios';
import SobreNosotros from './pages/SobreNosotros';
import { ClientAuthProvider } from "./context/ClientAuthContext";

import Login from './pages/Login';
import PasswordRecovery from './pages/RecuperacionContraseña';
import Registro from './pages/Registro';
import Terminos from './pages/Terminos';

function App() {
  return (
    <Router>
      <ClientAuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contactanos" element={<ContactPage />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RecuperacionContraseña" element={<PasswordRecovery />} />
          <Route path="/Terminos" element={<Terminos />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
        <Footer />
      </ClientAuthProvider>
    </Router>
  );
}

export default App;