import { useState } from 'react';
import { Search, Menu } from 'lucide-react';

export default function VentaPage() {
  // Estado para los datos de ventas (podrías obtenerlos de una API en un caso real)
  const [ventas, setVentas] = useState([
    { id: 1, vehiculo: 'Toyota Corolla', cliente: 'Juan Pérez', estatus: 'Completado' },
    { id: 2, vehiculo: 'Honda Civic', cliente: 'Ana Gómez', estatus: 'En proceso' },
    { id: 3, vehiculo: 'Nissan Sentra', cliente: 'Carlos Ruiz', estatus: 'Pendiente' },
    { id: 4, vehiculo: 'Volkswagen Golf', cliente: 'María Fernández', estatus: 'Completado' },
    { id: 5, vehiculo: 'Mazda 3', cliente: 'Roberto Díaz', estatus: 'En proceso' },
  ]);

  // Estado para la búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Header con título */}
      <div className="flex items-center mb-6">
        <div className="bg-white border border-gray-300 rounded-md p-2 mr-3">
          <svg width="32" height="32" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor" d="M16,6L19,10H21C22.11,10 23,10.89 23,12V15H21A3,3 0 0,1 18,18A3,3 0 0,1 15,15H9A3,3 0 0,1 6,18A3,3 0 0,1 3,15H1V12C1,10.89 1.89,10 3,10L6,6H16M10.5,7.5H6.75L4.86,10H10.5V7.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5A1.5,1.5 0 0,0 4.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 6,13.5M18,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0 18,16.5A1.5,1.5 0 0,0 19.5,15A1.5,1.5 0 0,0 18,13.5Z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Venta</h1>
      </div>

      {/* Barra de búsqueda y botón de menú */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <button className="bg-gray-900 text-white p-2 rounded-full">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Layout principal: tabla y botones */}
      <div className="flex gap-5">
        {/* Sección izquierda: tabla */}
        <div className="flex-grow">
          {/* Encabezado de la tabla */}
          <div className="grid grid-cols-3 bg-blue-400 text-white p-3 rounded-t-lg">
            <div className="font-medium">Vehículo</div>
            <div className="font-medium">Cliente</div>
            <div className="font-medium">Estatus</div>
          </div>
          
          {/* Filas de la tabla */}
          {ventas.map((venta, index) => (
            <div 
              key={venta.id} 
              className="grid grid-cols-3 py-4 border-b border-gray-200"
            >
              <div>{venta.vehiculo}</div>
              <div>{venta.cliente}</div>
              <div>{venta.estatus}</div>
            </div>
          ))}
        </div>

        {/* Sección derecha: botones */}
        <div className="flex flex-col gap-4">
          <button className="bg-gray-900 text-white py-3 px-2 rounded-lg w-28 text-center">
            Ver Ordenes
          </button>
          
          <button className="bg-gray-900 text-white py-3 px-2 rounded-lg w-28 text-center">
            Servicios
          </button>
        </div>
      </div>
    </div>
  );
}