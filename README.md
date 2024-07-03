# user-profile / Prueba Tecnica

**Nota:** Para instalar las dependencias en esta rama, es necesario utilizar el comando npm install --force debido a que la dependencia @testing-library/react-hooks estaba causando conflictos. Esta rama está destinada a la revisión completa del código. Para una instalación limpia sin problemas de dependencias, utiliza la rama no-test.



Este proyecto es una prueba técnica desarrollada con Next.js 14 y React para la implementación de un front-end de un perfil de usuario. Se ha puesto un fuerte énfasis en mejorar la experiencia del usuario mediante un diseño de interfaz simple pero atractivo. Se implementaron CSS Modules para una gestión y escalabilidad eficiente de estilos. Además, se incluyó Framer Motion para la animación de carga de imágenes y Animate.css para la animación de carga de bloques de texto, enriqueciendo así la experiencia del usuario.

![Logo del proyecto](./public/example.png)

# Instrucciones para levantar el proyecto localmente

Para levantar el proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/zanozano/user-profile.git
   cd user-profile
   ```

2. **Instala las dependencias:** 
   ```bash
   npm install --force
   ```

   **Nota**: Para instalar las dependencias en esta rama, es necesario utilizar el comando `npm install --force` debido a que la dependencia `@testing-library/react-hooks` estaba causando conflictos. Esta rama está destinada a la revisión completa del código. Para una instalación limpia sin problemas de dependencias, utiliza la rama `no-test`.
<br>
3. **Ejecuta el proyecto en modo desarrollo:**
   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **components/**: Contiene los componentes React utilizados en las diferentes secciones de la página.
- **hooks/**: Aquí se encuentra el hook `useContactForm` para el formulario de contacto.
- **styles/**: Archivos CSS y CSS Modules para estilizar la aplicación.
- **data/**: Archivo JSON para manejar textos globales del front-end.

## Pruebas Unitarias

Se ha incluido una prueba unitaria utilizando Jest para el hook `useContactForm`. Puedes encontrar la prueba en la carpeta `tests/`.

Para ejecutar las pruebas, utiliza el siguiente comando:
```bash
npm test
```

## Dependencias Principales

- **next**: 14.2.4
- **react**: ^18
- **react-dom**: ^18
- **animate.css**: ^4.1.1
- **framer-motion**: ^11.2.12
- **sweetalert2**: ^11.12.1

## Dependencias de Desarrollo

- **eslint**: ^8
- **eslint-config-next**: 14.2.4
- **jest**: ^29.7.0
- **@testing-library/jest-dom**: ^6.4.6
- **@testing-library/react**: ^16.0.0
- **@testing-library/react-hooks**: ^8.0.1
- **jest-environment-jsdom**: ^29.7.0
