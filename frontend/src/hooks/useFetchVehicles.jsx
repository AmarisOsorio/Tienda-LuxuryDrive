import React, { useEffect, useState } from 'react';

const useFetchVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVehicles = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/vehicles');
      
      if (!response.ok) {
        alert("Error al traer los vehículos");
      }

      const data = await response.json();
      setVehicles(data);
      console.log("data de vehículos", data);

    } catch (error) {
      console.log(error);
    }
  };

  const getBrands = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/brands');
      
      if (!response.ok) {
        alert("Error al traer las marcas");
      }

      const data = await response.json();
      setBrands(data);
      console.log("data de marcas", data);

    } catch (error) {
      console.log(error);
    }
  };

  const getModels = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/models');
      
      if (!response.ok) {
        alert("Error al traer los modelos");
      }

      const data = await response.json();
      setModels(data);
      console.log("data de modelos", data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getVehicles(), getBrands(), getModels()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    vehicles,
    setVehicles,
    brands,
    setBrands,
    models,
    setModels,
    loading
  };
};

export default useFetchVehicles;