import { CheckCircle } from "lucide-react";
import { automationExamples } from "@/data/company";

export default function Automation() {
  return (
    <section id="automatizacion" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            Automatizamos procesos empresariales
          </h2>
          <p className="text-xl text-[#12372A] font-medium mb-6">
            Menos tareas repetitivas. Más información y control para tomar
            decisiones.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lin Group también ofrece soluciones de automatización para empresas
            que buscan digitalizar procesos manuales, conectar información y
            mejorar la eficiencia operativa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationExamples.map((example) => (
            <div
              key={example}
              className="flex items-start gap-3 p-5 bg-[#F7F8F6] rounded-xl border border-gray-100"
            >
              <CheckCircle
                className="text-[#12372A] flex-shrink-0 mt-0.5"
                size={20}
              />
              <span className="text-gray-700 font-medium">{example}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
