import { Code, Database, FileText, Settings } from "lucide-react";
import { technologyServices } from "@/data/company";

const icons = [Code, Database, FileText, Settings];

export default function Technology() {
  return (
    <section
      id="tecnologia"
      className="py-16 lg:py-24 bg-gradient-to-br from-[#12372A] to-[#1F513B] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tecnología desarrollada desde la experiencia real
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Además de operar diferentes unidades de negocio, Lin Group desarrolla
            herramientas digitales para resolver necesidades reales de gestión.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mt-4">
            La experiencia obtenida trabajando directamente con operaciones
            comerciales permite diseñar sistemas simples, prácticos y adaptados
            al día a día empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologyServices.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.title}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 bg-[#C9A961] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-[#12372A]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
