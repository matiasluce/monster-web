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
- Blanco: #fff

Fuentes usadas (importadas de Google Fonts):
- Acme
- Bebas Neue
- Josefin Sans
- Koulen
- Poppins

Medidas:
Principalmente para las medidas usé px, vw, vh y algunas medidas están en auto para no limitar los elementos y que ocupen lo que sea necesario.
En algunas etiquetas p usé como font size "vw" que según el viewport va incrementando de tamaño el texto también lo hace.

[Media Queries - Breakpoints]

Para implementar los distintos breakpoints usé el método "mobile first", el css principal es para el estilo de Mobile y luego 2 breakpoints los cuales corresponden a Tablet y Desktop, así resultando 3 vistas diferentes que se adaptan según el dispositivo.

- Mobile: < 480px
- Tablet: < 800px
- Desktop: > 800px

Animaciones usadas:
- Transición de entrada del menú hamburguesa. keyframe: menu-anim
- Al hacer hover en la imagen del header la lata se inclina un poco y el texto produce un brillo por detrás.
- Los elementos tanto del header y footer cambian de color al hacerles hover.
- Los iconos de las redes sociales del footer incrementan su tamaño sutilmente y cambian su color.
- En la web de contacto al estar focus en un input la caja incrementa su tamaño sutilmente hasta que se quite el focus.

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
- Para la interacción de elegir la categoría de bebida y que se muestren las mismas.

[VALIDACION DEL FORMULARIO]

Los aspectos que tuve en cuenta para validar el formulario son:
- El nombre tiene que tener más de 4 caracteres.
- El correo debe contener @ y tener más de 10 caracteres.
- El mensaje debe tener más de 10 caracteres.
Cuando algún campo no cumple los requisitos, el mismo muestra un borde rojo y debajo aparece un mensaje con la pauta a cumplir.



