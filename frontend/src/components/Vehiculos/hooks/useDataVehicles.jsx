import useFetchVehicles from "../../../hooks/useFetchVehicles";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useDataVehicles = () => {
  const { vehicles, brands, models, loading } = useFetchVehicles();
  
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const { id } = useParams();

  // Cargar carrito del localStorage al iniciar
  const [vehiclesCart, setVehiclesCart] = useState(() => {
    const savedCart = localStorage.getItem("vehiclesCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (id) {
      setSelectedBrand(id);
    } else {
      setSelectedBrand("Todas");
    }
  }, [id]);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("vehiclesCart", JSON.stringify(vehiclesCart));
  }, [vehiclesCart]);

  const filteredVehicles =
    selectedBrand === "Todas"
      ? vehicles
      : vehicles?.filter((item) => item.idBrand?._id === selectedBrand);

  // Función para agregar vehículo al carrito
  const addToCart = (vehicle, quantity) => {
    setVehiclesCart((prevCart) => {
      // Buscar si vehículo ya está en carrito
      const existingVehicleIndex = prevCart.findIndex(
        (v) => v.idVehicle === vehicle._id
      );

      if (existingVehicleIndex !== -1) {
        // Actualizar cantidad y subtotal
        const updatedCart = [...prevCart];
        updatedCart[existingVehicleIndex].quantity += quantity;
        updatedCart[existingVehicleIndex].subtotal =
          updatedCart[existingVehicleIndex].quantity * vehicle.price;
        return updatedCart;
      } else {
        // Agregar nuevo vehículo
        return [
          ...prevCart,
          {
            idVehicle: vehicle._id,
            quantity: quantity,
            subtotal: vehicle.price * quantity,
          },
        ];
      }
    });
    console.log("Carrito de vehículos actualizado:", vehiclesCart);
  };

  return {
    addToCart,
    filteredVehicles,
    brands,
    selectedBrand,
    setSelectedBrand,
    vehiclesCart,
    setVehiclesCart,
    loading
  };
};

export default useDataVehicles;