import React, { useContext, useEffect, useState } from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { AuthContext } from "../context/AuthContext";
import { ClientAuthContext } from "../context/ClientAuthContext";
import toast from "react-hot-toast";

const CartVehicles = () => {
  const { vehicles } = useFetchVehicles();
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext); // Para empleados/admin
  const { client } = useContext(ClientAuthContext); // Para clientes
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("vehiclesCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("vehiclesCart", JSON.stringify(newCart));
  };

  const handleRemove = (idVehicle) => {
    const newCart = cart.filter((item) => item.idVehicle !== idVehicle);
    updateCart(newCart);
  };

  const handleQuantityChange = (idVehicle, delta) => {
    const newCart = cart.map((item) => {
      if (item.idVehicle === idVehicle) {
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1) return item;
        const vehicleInfo = vehicles.find((v) => v._id === idVehicle);
        return {
          ...item,
          quantity: newQuantity,
          subtotal: vehicleInfo.price * newQuantity,
        };
      }
      return item;
    });
    updateCart(newCart);
  };

  const cartWithDetails = cart.map((cartItem) => {
    const vehicleInfo = vehicles.find((v) => v._id === cartItem.idVehicle);
    return {
      ...cartItem,
      brand: vehicleInfo?.idBrand?.name || "Marca no encontrada",
      model: vehicleInfo?.idModels?.name || "Modelo no encontrado",
      price: vehicleInfo?.price || 0,
    };
  });

  const total = cartWithDetails.reduce((acc, item) => acc + item.subtotal, 0);

  // Función para enviar el pedido de vehículos a la API
  const sendOrder = async () => {
    setLoading(true);
    setMessage(null);

    // Obtener el usuario autenticado (puede ser cliente o empleado/admin)
    const currentUser = client || user;
    
    if (!currentUser) {
      setMessage("Error: Debes iniciar sesión para realizar una compra");
      toast.error("Debes iniciar sesión para realizar una compra");
      setLoading(false);
      return;
    }

    const order = {
      idClient: currentUser._id || currentUser.id,
      vehicles: cart.map(item => ({
        idVehicle: item.idVehicle,
        quantity: item.quantity,
        subtotal: item.subtotal
      })),
      total,
      status: "Pending",
      type: "vehicle" // Para diferenciar de pedidos de productos regulares
    };

    console.log("Enviando pedido de vehículos:", order);

    try {
      // Usar el endpoint correcto según si existe uno específico para vehículos
      const endpoint = "http://localhost:4000/api/vehicle-orders"; // o "/api/orders" si usas el mismo
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("clientToken") || localStorage.getItem("token")}`
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al crear pedido");
      }

      setMessage("Pedido de vehículos creado con éxito 🚗");
      toast.success("Pedido de vehículos creado con éxito");
      setCart([]);
      localStorage.removeItem("vehiclesCart");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return <p className="p-6 text-center">Tu carrito de vehículos está vacío.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Carrito de Vehículos</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Vehículo</th>
            <th className="text-right py-2">Precio</th>
            <th className="text-center py-2">Cantidad</th>
            <th className="text-right py-2">Subtotal</th>
            <th className="text-center py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cartWithDetails.map((item) => (
            <tr key={item.idVehicle} className="border-b">
              <td className="py-2">{item.brand} {item.model}</td>
              <td className="text-right py-2">${item.price.toLocaleString()}</td>
              <td className="text-center py-2">
                <button
                  onClick={() => handleQuantityChange(item.idVehicle, -1)}
                  className="px-2 py-1 border rounded-l"
                  aria-label={`Disminuir cantidad de ${item.brand} ${item.model}`}
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.idVehicle, 1)}
                  className="px-2 py-1 border rounded-r"
                  aria-label={`Aumentar cantidad de ${item.brand} ${item.model}`}
                >
                  +
                </button>
              </td>
              <td className="text-right py-2">${item.subtotal.toLocaleString()}</td>
              <td className="text-center py-2">
                <button
                  onClick={() => handleRemove(item.idVehicle)}
                  className="text-red-600 hover:text-red-800 font-semibold"
                  aria-label={`Eliminar ${item.brand} ${item.model} del carrito`}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right font-bold py-2">
              Total:
            </td>
            <td className="text-right font-bold py-2">${total.toLocaleString()}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      {/* Mensaje de estado */}
      {message && (
        <p
          className={`mt-4 font-semibold ${
            message.startsWith("Error") ? "text-red-600" : "text-green-600"
          }`}
          role="alert"
        >
          {message}
        </p>
      )}

      {/* Botón para enviar pedido */}
      <button
        onClick={sendOrder}
        disabled={loading}
        className={`mt-6 px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50`}
      >
        {loading ? "Procesando..." : "Confirmar Compra"}
      </button>
    </div>
  );
};

export default CartVehicles;