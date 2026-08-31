import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#12372A] to-[#1F513B] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          ¿Podemos mejorar algún proceso de tu empresa?
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
          Conversemos sobre tu operación y evaluemos oportunidades de
          digitalización, desarrollo de software o automatización.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${company.whatsappLink}?text=${encodeURIComponent("Hola, quisiera consultar sobre los servicios de Lin Group.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#12372A] font-semibold rounded-lg hover:bg-[#F7F8F6] transition-colors"
          >
            <MessageCircle size={20} />
            Hablar por WhatsApp
          </a>
          <Link
            href="#empresas"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-[#12372A] transition-colors"
          >
            Conocer nuestras empresas
          </Link>
        </div>
      </div>
    </section>
  );
}
