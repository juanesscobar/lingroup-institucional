import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#empresas", label: "Empresas" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#automatizacion", label: "Automatización" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  {
    name: "Lin Group Facebook",
    url: company.facebook,
  },
  {
    name: "Chico Lin Cafetería",
    url: "https://www.facebook.com/chicolincafeteria/",
  },
  {
    name: "San Benito",
    url: "https://www.facebook.com/sanbenito.py/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12372A] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Lin Group"
                width={140}
                height={42}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Empresas, tecnología y soluciones para crecer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Lin Group. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
