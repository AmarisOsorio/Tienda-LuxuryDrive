import { createContext, useContext, useState, useEffect, useCallback } from "react"; 
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export const ClientAuthContext = createContext(null); 

// Hook personalizado con validación
export const useClientAuth = () => {
  const context = useContext(ClientAuthContext);
  if (!context) {
    throw new Error('useClientAuth debe ser usado dentro de un ClientAuthProvider');
  }
  return context;
};

export const ClientAuthProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [clientToken, setClientToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:4000/api";

  const navigate = useNavigate();

  const clearClientSession = () => {
    localStorage.removeItem("clientToken");
    localStorage.removeItem("clientData");
    setClient(null);
    setClientToken(null);
  };

  // Verificar token al cargar la aplicación
  useEffect(() => {
    const initClientAuth = async () => {
      const token = localStorage.getItem("clientToken");
      const clientData = localStorage.getItem("clientData");

      if (token && clientData) {
        try {
          // Verificar si el token sigue siendo válido
          const response = await fetch(`${API_URL}/verify-client-token`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            credentials: "include",
          });

          if (response.ok) {
            setClientToken(token);
            setClient(JSON.parse(clientData));
          } else {
            clearClientSession();
          }
        } catch (error) {
          console.error("Error verifying client token:", error);
          clearClientSession();
        }
      }
      setLoading(false);
    };

    initClientAuth();
  }, []);

  const logout = useCallback(() => {
    const logoutClient = async () => {
      try {
        await fetch(`${API_URL}/logout`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${clientToken}`,
          },
          credentials: "include",
        });
      } catch (error) {
        console.error("Error during client logout:", error);
      } finally {
        clearClientSession();
        navigate("/");
        toast.success("Sesión cerrada correctamente");
      }
    };

    logoutClient();
  }, [API_URL, navigate, clientToken]);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar datos en localStorage
        localStorage.setItem("clientToken", data.token);
        localStorage.setItem("clientData", JSON.stringify(data.client));
        
        // Actualizar estado
        setClientToken(data.token);
        setClient(data.client);
        
        toast.success("Inicio de sesión exitoso");
        
        // Redirigir a la tienda o página principal
        navigate("/");
        
        return true;
      } else {
        toast.error(data.message || "Credenciales incorrectas");
        return false;
      }
    } catch (error) {
      console.error("Error during client login:", error);
      toast.error("Error de conexión con el servidor");
      return false;
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/registerClients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        toast.success("Cuenta registrada correctamente. Ya puedes iniciar sesión.");
        return true;
      } else {
        const data = await response.json();
        toast.error(data.message || "Error al registrar");
        return false;
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      toast.error("Error de conexión al registrar.");
      return false;
    }
  };

  const value = {
    client,
    clientToken,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!clientToken,
    API: API_URL,
  };

  return (
    <ClientAuthContext.Provider value={value}>
      {children}
    </ClientAuthContext.Provider>
  );
};