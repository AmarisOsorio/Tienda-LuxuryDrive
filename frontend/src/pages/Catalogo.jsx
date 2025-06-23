import React from "react";
import Title from "../components/Titles";
import CardVehicle from "../components/Vehiculos/CardVehicle";
import useDataVehicles from "../components/Vehiculos/hooks/useDataVehicles";

const Catalogo = () => {
  const {
    addToCart,
    filteredVehicles,
    selectedBrand,
    brands,
    setSelectedBrand,
    vehiclesCart,
    loading
  } = useDataVehicles();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="text-xl">Cargando vehículos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <Title text="Catálogo de Vehículos" />
        <p className="text-gray-600 mb-8 text-lg">
          Encuentra el vehículo perfecto para ti. ¡La mejor selección y los mejores precios!
        </p>

        <div className="mb-6">
          <label className="mr-2 font-semibold text-gray-700">
            Filtrar por marca:
          </label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="Todas">Todas las marcas</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Vehículos en la marca:{" "}
          {brands.find((brand) => brand._id === selectedBrand)?.name ||
            "Todas"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredVehicles.length === 0 ? (
            <p className="text-gray-600">
              No hay vehículos disponibles en esta marca.
            </p>
          ) : (
            filteredVehicles.map((item) => (
              <CardVehicle
                vehicle={item}
                key={item._id}
                addToCart={addToCart}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;