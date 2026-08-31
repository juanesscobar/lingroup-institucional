"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Hablar con Lin Group"
      title="Hablar con Lin Group"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
}
