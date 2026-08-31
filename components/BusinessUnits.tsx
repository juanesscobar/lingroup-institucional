import { ExternalLink, MessageCircle } from "lucide-react";
import { businessUnits } from "@/data/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function BusinessUnits() {
  return (
    <section id="empresas" className="py-16 lg:py-24 bg-[#F7F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            Nuestras empresas y unidades de negocio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessUnits.map((unit) => (
            <div
              key={unit.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center px-3 py-1 bg-[#12372A]/10 rounded-full mb-4">
                <span className="text-xs font-semibold text-[#12372A]">
                  {unit.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                {unit.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {unit.description}
              </p>

              <div className="flex flex-col gap-3">
                {unit.facebook && (
                  <a
                    href={unit.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F7F8F6] text-[#12372A] text-sm font-medium rounded-lg hover:bg-[#12372A] hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visitar Facebook
                  </a>
                )}

                {unit.hasWhatsApp && (
                  <a
                    href={buildWhatsAppLink(
                      "Hola, quisiera consultar sobre los servicios de la Agencia de Créditos de Lin Group."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#12372A] text-white text-sm font-medium rounded-lg hover:bg-[#1F513B] transition-colors"
                  >
                    <MessageCircle size={16} />
                    Consultar servicios
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
