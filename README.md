# acicloud-public

Repositorio público de documentación para ACIv2 API - Sistema de integración para facturación electrónica.

## Documentación de la API

Sitio web público con documentación completa de los endpoints:

**[https://weirdolabs.github.io/acicloud-public/](https://weirdolabs.github.io/acicloud-public/)**

> Esta documentación está disponible públicamente en GitHub Pages

O localmente abriendo: `index.html`

## Características de la Documentación

- Navegación interactiva por plataformas (QuickBooks, Zoho, Xero, Shopify, WooCommerce, Dentalink)
- Búsqueda de endpoints en tiempo real
- Ejemplos de código y respuestas
- Descripción detallada de parámetros y autenticación
- Diseño responsive y modo oscuro

## Estructura del Proyecto

```
acicloud-public/
├── index.html          # Página principal de documentación
├── styles.css          # Estilos
├── script.js           # Interactividad
├── .nojekyll           # Configuración para GitHub Pages
├── .github/
│   └── copilot-instructions.md  # Guía para agentes de IA
└── README.md
```

## Desarrollo Local

Para visualizar la documentación localmente:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/weirdolabs/acicloud-public.git
   cd acicloud-public
   ```

2. Abrir `index.html` en tu navegador web

## Publicación en GitHub Pages

La documentación se publica automáticamente en GitHub Pages desde la raíz del repositorio.

Para configurar:
1. Ve a Settings > Pages en el repositorio
2. Selecciona "Deploy from a branch"
3. Branch: `main`, Folder: `/ (root)`
4. Guarda los cambios

## Fuente de las APIs

Esta es documentación pública de la API ACIv2. El código fuente de la API se encuentra en un repositorio privado separado.

## Contribuciones

Para sugerencias o correcciones en la documentación, por favor abre un issue en este repositorio.
