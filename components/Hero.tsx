import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#F7F8F6] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#12372A]/5 rounded-full">
              <span className="text-sm font-semibold text-[#12372A] tracking-wide">
                LIN GROUP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
              Empresas que crecen.{" "}
              <span className="text-[#12372A]">Tecnología que las conecta.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Lin Group reúne diferentes unidades de negocio en servicios,
              gastronomía, finanzas y tecnología, combinando experiencia
              operativa con herramientas digitales desarrolladas para mejorar la
              gestión y el crecimiento empresarial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#grupo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#12372A] text-white font-medium rounded-lg hover:bg-[#1F513B] transition-colors"
              >
                Conocer el grupo
                <ArrowRight size={18} />
              </Link>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#12372A] font-medium rounded-lg border-2 border-[#12372A] hover:bg-[#12372A] hover:text-white transition-colors"
              >
                <MessageCircle size={18} />
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#12372A]/10 to-[#C9A961]/10 rounded-3xl" />
              <div className="absolute top-8 left-8 w-32 h-32 bg-[#12372A] rounded-2xl opacity-90" />
              <div className="absolute top-20 right-12 w-24 h-24 bg-[#C9A961] rounded-xl opacity-80" />
              <div className="absolute bottom-16 left-16 w-28 h-28 bg-[#1F513B] rounded-2xl opacity-85" />
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-[#E8D9B0] rounded-lg opacity-90" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-lg shadow-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-[#12372A]">L</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
