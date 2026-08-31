"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { company, serviceOptions } from "@/data/company";
import { buildContactWhatsAppMessage } from "@/lib/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildContactWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-[#F7F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-6">
              Contacto
            </h2>
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-[#12372A]">
                LIN GROUP
              </h3>
              <p className="text-gray-600">WhatsApp: {company.phone}</p>
            </div>

            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#12372A] text-white font-medium rounded-lg hover:bg-[#1F513B] transition-colors"
            >
              <MessageCircle size={20} />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="servicio"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  ¿En qué podemos ayudarte?
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-[#12372A] text-white font-medium rounded-lg hover:bg-[#1F513B] transition-colors"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
