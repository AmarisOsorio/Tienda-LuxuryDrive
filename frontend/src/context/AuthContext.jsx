import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

// Hook personalizado con validación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:4000/api";

  const navigate = useNavigate();

  const clearSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUser(null);
    setToken(null);
  };

  // Verificar token al cargar la aplicación
  useEffect(() => {
    const initAuth = async () => {
      const savedToken = localStorage.getItem("token");
      const savedUserData = localStorage.getItem("userData");

      if (savedToken && savedUserData) {
        try {
          // Verificar si el token sigue siendo válido
          const response = await fetch(`${API_URL}/verify-token`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${savedToken}`,
              "Content-Type": "application/json",
            },
            credentials: "include",
          });

          if (response.ok) {
            setToken(savedToken);
            setUser(JSON.parse(savedUserData));
          } else {
            clearSession();
          }
        } catch (error) {
          console.error("Error verifying token:", error);
          clearSession();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const logout = useCallback(() => {
    const logoutUser = async () => {
      try {
        await fetch(`${API_URL}/logout`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          credentials: "include",
        });
      } catch (error) {
        console.error("Error during logout:", error);
      } finally {
        clearSession();
        navigate("/");
        toast.success("Sesión cerrada correctamente");
      }
    };

    logoutUser();
  }, [API_URL, navigate, token]);

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
        // Verificar si es un empleado o admin
        if (data.user && (data.user.userType === "Admin" || data.user.userType === "Employee")) {
          // Guardar datos en localStorage
          localStorage.setItem("token", data.token);
          localStorage.setItem("userData", JSON.stringify(data.user));
          
          // Actualizar estado
          setToken(data.token);
          setUser(data.user);
          
          toast.success("Inicio de sesión exitoso");
          
          // Redirigir según el tipo de usuario
          if (data.user.userType === "Admin") {
            navigate("/admin");
          } else if (data.user.userType === "Employee") {
            navigate("/employee");
          }
          
          return true;
        } else {
          // Si no es admin o empleado, no guardar en este contexto
          toast.error("Acceso denegado. Use el login de clientes.");
          return false;
        }
      } else {
        toast.error(data.message || "Credenciales incorrectas");
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Error de conexión con el servidor");
      return false;
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Usuario registrado correctamente");
        return true;
      } else {
        toast.error(data.message || "Error al registrar");
        return false;
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      toast.error("Error de conexión al registrar");
      return false;
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!token,
    isAdmin: user?.userType === "Admin",
    isEmployee: user?.userType === "Employee",
    API: API_URL,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};