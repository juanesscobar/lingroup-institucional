"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#grupo", label: "Grupo" },
  { href: "#empresas", label: "Empresas" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#automatizacion", label: "Automatización" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="#inicio" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Lin Group"
              width={120}
              height={36}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#12372A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#12372A] text-white text-sm font-medium rounded-lg hover:bg-[#1F513B] transition-colors"
          >
            Hablar con nosotros
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#12372A] text-white text-sm font-medium rounded-lg"
              >
                Hablar con nosotros
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
