# Instrucciones para agentes de IA en `acicloud-public`

## Estado actual del repositorio
- Este es un repositorio público que contiene documentación de la API ACIv2.
- Estructura principal: archivos HTML, CSS y JavaScript en la raíz, publicados en GitHub Pages.
- No contiene código de backend ni lógica de aplicación (solo documentación frontend pública).
- El código fuente de la API documentada reside en un repositorio privado separado.

## Fuente de verdad y contexto
- `README.md` describe la estructura y propósito del repositorio.
- `index.html` es la página principal de documentación con todos los endpoints.
- `styles.css` y `script.js` gestionan presentación e interactividad.
- Código fuente de la API real: `/home/weirdolabs/code/api-aci/aciv2/*` (repositorio externo).
- Cambios en documentación deben reflejar endpoints reales del código fuente.

## Convenciones de colaboración observadas
- Escribir mensajes y documentación en español.
- **ESTRICTAMENTE PROHIBIDO**: No incluir emojis, iconos o símbolos decorativos en ningún contexto (commits, comentarios, código, documentación).
- Mantener el alcance mínimo: evitar crear componentes o capas no solicitadas.

## Convenciones de commits
- Redactar commits en español.
- **ESTRICTAMENTE PROHIBIDO**: No usar emojis, iconos ni símbolos decorativos en los mensajes de commit.
- Usar formato tipo convencional: `tipo: descripción clara en español`.
- Author debe ser: `Equipo de Aci Cloud`.

## Patrones de trabajo recomendados para este repo
- Preferir cambios pequeños y atómicos sobre scaffolding amplio no solicitado.
- Antes de introducir dependencias, justificar su necesidad en `README.md`.
- Si una solicitud requiere suposiciones de stack, proponer 1 opción por defecto y pedir confirmación breve.

## Ejemplos de referencias clave del proyecto
- Estado base del proyecto: `README.md`
- Documentación principal: `index.html`
- Estilos: `styles.css`
- Scripts: `script.js`
- Archivo de guía para agentes: `.github/copilot-instructions.md`

## Checklist para cambios futuros
- Verificar endpoints reales en `/home/weirdolabs/code/api-aci/aciv2/*` antes de documentar.
- Mantener sincronizada la documentación con cambios en la API real.
- Actualizar `README.md` si se modifica la estructura del repositorio.
- Validar que HTML, CSS y JS funcionen correctamente en navegadores.
- Probar búsqueda y navegación después de agregar nuevos endpoints.
- Evitar documentar endpoints no implementados o en desarrollo.