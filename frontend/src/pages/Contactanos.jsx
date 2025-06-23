import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        // Aquí iría la lógica para enviar el formulario
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header con imagen de fondo */}
            <header className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-start">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
                    }}
                ></div>
                <div className="relative z-10 text-white px-16">
                    <h1 className="text-5xl font-bold leading-tight">
                        Estamos para<br />
                        servirte
                    </h1>
                </div>
            </header>

            {/* Sección principal de contacto */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Título y subtítulo */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
                    <p className="text-lg text-gray-600">Le atenderemos lo más pronto posible</p>
                </div>

                {/* Formulario de contacto */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-12 max-w-2xl mx-auto shadow-lg">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                className="w-full px-6 py-3 rounded-full border border-blue-200 bg-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <input
                                type="tel"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                                className="w-full px-6 py-3 rounded-full border border-blue-200 bg-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-6 py-3 rounded-full border border-blue-200 bg-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        
                        <textarea
                            name="mensaje"
                            placeholder="Mensaje"
                            value={formData.mensaje}
                            onChange={handleInputChange}
                            rows="4"
                            className="w-full px-6 py-3 rounded-2xl border border-blue-200 bg-blue-100 placeholder-blue-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                        ></textarea>
                        
                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-lg"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sección de información de contacto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-blue-100 rounded-3xl p-8 text-center shadow-md">
                        <div className="flex justify-center mb-6">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                                <MapPin className="w-12 h-12 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Encuéntranos</h3>
                        <p className="text-blue-600 leading-relaxed">
                            Calle del mirador &, 87 Avenida Norte, San Salvador
                        </p>
                    </div>

                    <div className="bg-blue-100 rounded-3xl p-8 text-center shadow-md">
                        <div className="flex justify-center mb-6">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Mail className="w-12 h-12 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Email</h3>
                        <p className="text-blue-600">@luxuryDrive</p>
                    </div>

                    <div className="bg-blue-100 rounded-3xl p-8 text-center shadow-md">
                        <div className="flex justify-center mb-6">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Phone className="w-12 h-12 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Teléfono</h3>
                        <p className="text-blue-600">2253-8573</p>
                    </div>
                </div>

                {/* Sección de mapa y horarios */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Mapa */}
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <div className="bg-gray-200 h-80 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">Mapa de ubicación</p>
                                <p className="text-gray-400 text-sm mt-2">Google Maps se cargaría aquí</p>
                            </div>
                        </div>
                    </div>

                    {/* Horarios de atención */}
                    <div className="bg-blue-100 rounded-3xl p-8 shadow-md">
                        <h3 className="text-2xl font-semibold text-blue-800 text-center mb-8">
                            Horarios de atención
                        </h3>
                        <div className="space-y-4 text-center">
                            <div className="bg-white rounded-2xl p-4 shadow-sm">
                                <p className="text-blue-600 font-medium">Lunes a Viernes</p>
                                <p className="text-blue-500">8:00 am - 5:00 pm</p>
                            </div>
                            <div className="bg-white rounded-2xl p-4 shadow-sm">
                                <p className="text-blue-600 font-medium">Sábado</p>
                                <p className="text-blue-500">8:00 am - 12:00 pm</p>
                            </div>
                            <div className="bg-white rounded-2xl p-4 shadow-sm">
                                <p className="text-blue-600 font-medium">Domingo</p>
                                <p className="text-blue-500">Cerrado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-6">Luxury Drive</h3>
                    <p className="text-gray-400 mb-8">CONTÁCTANOS</p>
                    
                    <div className="flex justify-center space-x-6 mb-8">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                            <Facebook className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                            <Twitter className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                            <Instagram className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                            <Youtube className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                            <Linkedin className="w-5 h-5" />
                        </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm">
                        Copyright © Luxury Drive Company. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;