# movie-search
CRUD de series y películas (práctica).

## Metas:
- ✅ Usar API Fetch para convertir las tarjetas (figure) estáticas a dinámicas.
- ✅ Agregar una ficha de Imdb correspondiente cada película.
- ✅ Agregar una película
- ✅ Eliminar película
- Modificar datos de una película ya existente.
- Comprobar que hay una película a la que quieres agregar

 
# 09/09/21
- Se agregó un archivo JSON con contenido dinámico para simular una petición de datos a una API REST.
- Se refactorizó el código, adaptandolo así a la API Fetch.

# 13/09/21

- Se agregaron más elementos HTML a index.html (boton y datos de la pelicula en ventana modal).
- Se agregaron más estilos al archivo styles.css, se removieron algunos deprecados y se redujeron la cantidad de líneas de código.
- Se agregaron más datos para cada objeto en el archivo db.json (type & imdb).
- Se agregó una película más a db.json.
- Se corrigió el código de la función renderCards() en el archivo index.js.
- Se modificó la función setInfoModal() para agregar más datos de las series y películas a la ventana modal.

# 15/09/21
- Se agregó una nueva función (fetchMovies()) para reemplazar el proceso de obtener los datos de renderizarlos.
- Se refactorizaron las funciones, adaptándolas así a async-await.
- Se corrigieron errores de declaraciones de constantes y variables.
- Se corrigió el responsive design de las tarjetas y su contenedor principal.

# 18/09/21

- Se crearon archivos modulares para las funciones que antiguamente estaban en index.js.
- Se refactorizó el código dentro de algunas funciones para hacerlo más legible.
- Se cambió el  tipo de función (arrow) de fetchMovies() a la forma tradicional (palabra reservada "function").
- Se creó una mini función para desocultar/mostrar la ventana modal.
- Se removieron espacios en blanco del archivo styles.css y se agregaron comentarios para dividir los tipos de estilos.

# 19/09/21
- Se implementó SASS al proyecto para escribir código css mucho más eficiente.
- Se creó un archivo styles.scss dentro de la carpeta scss.
- Se agregó un módulo (_variables.css) a la carpeta scss para declarar estilos reutilizables.
- Se refactorizó el código de las funciones setInfoModal() y renderCards().
- Se agregaron nuevas etiquetas templates de algunos componentes a usar (modal-window y add-form).
- Se agregó un pie de página (footer) al index.html.
- Se agregó una función ( showForm() ) para testear un código y diseño en específico.
- Se agregó un template para el formulario de añadir película.

# 20/09/21

- Se agregaron nuevas funciones al modulo modal.js (appendCardInfoModal, appendFormModal, createElement, destroySecondChild).
- Se agregaron las funciones anteriormente citadas al archivo index.js.
- Se agregaron comentarios a la función destroySecondChild().
- Se renombró la función setModalInfo() a setCardInfoModal().
- Se agregó la etiqueta main al archivo index.html.
- Se movió la etiqueta con la clase "media-container" al archivo main, al igual que la etiqueta "modal-container".
- Se agregó funcionalidad al botón "add movie card".
- Se agregaron nuevos estilos al archivo styles.scss.
- Se modificó el diseño y responsive design (media queries) principal.

# 27/09/21
- Se agregó un nuevo módulo: crud.js
- Se agregaron, importaron y exportaron nuevas funciones: createMovie(), deleteMovie(), validateForm(), validateField().
- Se agregó un nuevo formulario "add-form" (template).
- Se agregó una ul con botones de acciones (editar y eliminar) a las tarjetas de las películas (HTML).
- Se agregaron nuevos estilos al archivo styles.scss.

