# Invitation Admin App

¡Bienvenido a **Invitation Admin App**!  
Esta es una aplicación web desarrollada en Next.js (TypeScript) + Tailwind CSS que te permite gestionar invitaciones para cualquier evento y consultar en tiempo real quiénes han confirmado su asistencia.

## ✨ Funcionalidades

- **Panel de Invitaciones:** Visualiza la lista completa de invitados.
- **Seguimiento de Confirmaciones:** Consulta quiénes ya han confirmado su asistencia y quiénes faltan por responder.
- **Búsqueda y Filtros:** Encuentra rápidamente invitados por nombre o estado de confirmación.
- **Interfaz amigable:** UI responsiva, moderna y personalizable.
- **Gestión Segura:** Solo usuarios autenticados pueden acceder a la administración.

## 🚀 Tecnologías usadas

- [Next.js](https://nextjs.org/) (v14+)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (componentes UI)
- [Prisma, MongoDB, PostgreSQL, MySQL, etc.] (Agrega tu DB si aplica)
- [Autenticación NextAuth, Clerk, Auth.js, etc.] (Si aplica)

## 📦 Instalación y ejecución

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/tuusuario/invitation-admin-app.git
    cd invitation-admin-app
    ```

2. **Instala dependencias:**
    ```bash
    npm install
    # o
    pnpm install
    ```

3. **Configura tus variables de entorno:**  
    Copia el archivo `.env.example` a `.env` y completa los valores requeridos (por ejemplo, conexión a base de datos).

4. **Inicia la app en modo desarrollo:**
    ```bash
    npm run dev
    ```

5. **Abre en tu navegador:**  
    [http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts útiles

- `npm run dev` — Inicia el servidor en modo desarrollo
- `npm run build` — Genera el build para producción
- `npm start` — Inicia el build en modo producción
- `npm run lint` — Corre linter para código limpio
- 

## 💡 Personalización

- Cambia los colores, logo y textos en `/app/styles/globals.css` y componentes.
- Agrega nuevos campos para los invitados según tus necesidades.

## 📃 Licencia

Este proyecto es de uso interno/privado.  

---

¿Dudas, sugerencias o quieres contribuir? ¡Abre un issue o contáctanos!
