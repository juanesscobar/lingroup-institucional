# Lin Group - Sitio Institucional

Sitio web institucional de Lin Group, desarrollado con Next.js, TypeScript, Tailwind CSS y desplegable con Docker.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Producción con Docker

### Construir y levantar el contenedor

```bash
docker compose up -d --build
```

### Ver logs

```bash
docker compose logs -f
```

### Detener el contenedor

```bash
docker compose down
```

### Actualizar el sitio

```bash
git pull
docker compose up -d --build
```

## Estructura del proyecto

```
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── BusinessUnits.tsx
│   ├── Technology.tsx
│   ├── Automation.tsx
│   ├── Process.tsx
│   ├── WhyLinGroup.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── data/
│   └── company.ts
├── lib/
│   └── whatsapp.ts
├── public/
│   ├── logo.svg
│   └── favicon.svg
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Características

- Diseño responsive (mobile-first)
- SEO optimizado
- Integración con WhatsApp
- Enlaces a redes sociales
- Formulario de contacto que envía a WhatsApp
- Health check endpoint en `/api/health`
- Configuración Docker con multi-stage build
- Next.js standalone output para imágenes optimizadas

## Configuración de Reverse Proxy (Nginx)

Para exponer el sitio en un dominio, configura Nginx:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Tecnologías

- Next.js 15
- TypeScript
- Tailwind CSS 4
- Lucide React (iconos)
- Docker

## Licencia

© 2026 Lin Group. Todos los derechos reservados.
