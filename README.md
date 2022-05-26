# Documentación del TPO Codo a Codo 

Para este proyecto decidi crear una web de la marca Monster Energy (https://www.monsterenergy.com/) con un diseño propio sin intentar copiar el estilo de la web
oficial.

Intenté encontrar el json de la web oficial para usarlo en la web y mediante Vue Js mostrar las imágenes y/o nombres de las bebidas, pero no pude encontrar el
archivo por lo cúal me dispuse a crear mi propio archivo json con las siguientes carácteristicas:
- ID
- Nombre de la bebida
- Categoría
- Imagen de la bebida
- Imagen del logo de la bebida
- Descripción de la bebida
- Sabor



[ESTILOS DE LA WEB]

Colores principales usados:
- Verde: #b7d237
- Negro: #040404

Fuentes usadas (importadas de Google Fonts):
- Acme
- Bebas Neue
- Josefin Sans
- Koulen
- Poppins

[Media Queries - Breakpoints]
Para implementar los distintos breakpoints usé el método "mobile first", el css principal es para el estilo de Mobile y luego 2 breakpoints los cuales corresponden a Tablet y Desktop, así resultando 3 vistas diferentes que se adaptan según el dispositivo.

- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

Animaciones usadas:
- Transición de entrada del menú hamburguesa. keyframe: menu-anim

[BOOTSTRAP]
Usado en la página de contacto para el formulario.
En los estilos del mismo tuve que usar 2 veces el !important para pisar el estilo de bootstrap porque de otra manera era imposible cambiarle el estilo.

[JAVASCRIPT]

Vanilla Js:
- Para insertar en cada html el header, footer y el contenedor del menú hamburguesa.
- Validación del formulario de contacto.
- Cree funciones para abrir y cerrar el menu hamburguesa.

Vue Js:
- Para hacer el fetch del json y extraer la información.
- Mostrar en su respectivo contenedor las distintas bebidas extraídas del json.




