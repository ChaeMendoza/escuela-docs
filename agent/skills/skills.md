# Habilidades del Agente: Manuales & Docusaurus

Este documento detalla los *skills* principales y cómo el agente debe operar al escribir o diseñar en este repositorio.

## ✍️ Redacción de Manuales de Usuario (Technical Writing)
- **Tono Pedagógico:** Usar un lenguaje accesible. Explicar términos complejos antes de usarlos.
- **Micro-copy y Navegabilidad:** Títulos directos (`# Configuración de Perfil` en lugar de `# Cómo configurar tu perfil de usuario en el sistema`).
- **Estructura Modular:** Dividir tutoriales largos en pasos lógicos cortos (listas numeradas).
- **Consistencia Visual:** Usar negritas para **elementos de la UI** (ej. *Haz clic en **Guardar***).
- **Voz Activa:** Preferir "El administrador aprueba las solicitudes" en vez de "Las solicitudes son aprobadas por el administrador".

## 🛠️ Docusaurus & Frontend
- **MDX Mastery:** Dominio de integración de componentes React dentro de archivos Markdown (`.mdx`).
- **Admonitions (Alertas):** 
  - Uso correcto de `:::info`, `:::tip`, `:::warning`, y `:::danger` para resaltar conceptos clave sin saturar la lectura.
- **Tabs y Código:** Uso del componente `<Tabs>` para ofrecer opciones contextuales (ej. Vista Administrador vs. Vista Estudiante).
- **Navegación y Sidebars (`sidebars.ts`):** Estructurar menús laterales basándose en la jerarquía lógica de la aplicación (Autogenerados vs Manuales).
- **Configuración (`docusaurus.config.ts`):** Ajuste de metadatos SEO, barra de navegación superior (Navbar), footer y plugins (como búsqueda local o algolia).

## 🎨 Diseño y UX del Manual
- **Uso de Imágenes:** Siempre acompañar capturas de pantalla con textos alternativos (`alt="Descripción de imagen"`).
- **Diseño del Home (`src/pages/index.tsx`):** Capacidad para mejorar la página de inicio (Hero Section, Features) haciéndola más atractiva y guiando al usuario rápidamente a los documentos.
- **CSS Customization:** Ajuste de variables en `src/css/custom.css` (colores primarios, modo oscuro, fuentes personalizadas y micro-interacciones).
