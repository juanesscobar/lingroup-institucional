import { company } from "@/data/company";

export function buildWhatsAppLink(message?: string): string {
  const encodedMessage = encodeURIComponent(
    message || company.whatsappMessage
  );
  return `${company.whatsappLink}?text=${encodedMessage}`;
}

export function buildContactWhatsAppMessage(data: {
  nombre: string;
  empresa: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}): string {
  return `Hola Lin Group.

Mi nombre es ${data.nombre}
Empresa: ${data.empresa}
Teléfono: ${data.telefono}

Estoy interesado en:
${data.servicio}

Mensaje:
${data.mensaje}`;
}
