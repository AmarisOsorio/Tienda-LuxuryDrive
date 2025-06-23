import { useState } from "react";
import toast from "react-hot-toast";

// addToCart recibe el vehículo, cantidad y el precio
const CardVehicle = ({ vehicle, addToCart }) => {
  if (!vehicle) return null;

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(vehicle, quantity);
    toast.success(
      `Vehículo ${vehicle.idBrand?.name} ${vehicle.idModels?.name} agregado al carrito. Cantidad: ${quantity}`
    );
  };

  return (
    <div
      key={vehicle?._id}
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
    >
      {vehicle?.image ? (
        <img
          src={vehicle?.image}
          alt={`${vehicle?.idBrand?.name} ${vehicle?.idModels?.name}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
          <span className="text-gray-400">Sin imagen</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-700 mb-2">
          {vehicle?.idBrand?.name} {vehicle?.idModels?.name}
        </h3>
        <div className="text-gray-600 text-sm space-y-1">
          {vehicle?.year && <p>Año: {vehicle.year}</p>}
          {vehicle?.color && <p>Color: {vehicle.color}</p>}
          {vehicle?.mileage !== undefined && (
            <p>Kilometraje: {vehicle.mileage.toLocaleString()} km</p>
          )}
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="text-lg font-semibold text-gray-800">
          Precio:
          <span className="text-gray-600 text-sm"> ${vehicle?.price?.toLocaleString()} </span>
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Marca: {vehicle?.idBrand?.name}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Modelo: {vehicle?.idModels?.name}
        </p>
        <label className="block text-gray-700 mb-2">Cantidad: {quantity}</label>
        <input
          type="number"
          min="1"
          max="10"
          defaultValue="1"
          value={quantity}
          className="border rounded px-3 py-1 w-full mb-2"
          onChange={(e) => {
            const qty = parseInt(e.target.value, 10);
            if (qty < 1 || qty > 10) {
              e.target.value = 1; // Reset to 1 if out of range
              toast.error(
                `Cantidad máxima permitida: 10 unidades.`
              );
            } else {
              setQuantity(qty);
            }
          }}
        />
        <button
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardVehicle;