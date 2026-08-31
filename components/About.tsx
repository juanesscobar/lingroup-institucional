import { Briefcase, Cpu, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    title: "Operación",
    description: "Gestión de negocios reales y servicios orientados al cliente.",
  },
  {
    icon: Cpu,
    title: "Tecnología",
    description:
      "Desarrollo de sistemas que acompañan y optimizan nuestras operaciones.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Automatización y mejora continua de procesos empresariales.",
  },
];

export default function About() {
  return (
    <section id="grupo" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-6">
            Un grupo, diferentes oportunidades
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lin Group desarrolla y opera negocios en distintos sectores,
            integrando experiencia comercial, gestión empresarial y tecnología.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Nuestra visión es construir empresas eficientes, modernas y
            preparadas para crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 bg-[#F7F8F6] rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#12372A] rounded-xl flex items-center justify-center mb-6">
                <pillar.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
