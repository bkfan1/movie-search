# movie-search
Un buscador de series y películas (práctica).

## Metas:
- ✅ Usar API Fetch para convertir las tarjetas (figure) estáticas a dinámicas.
- ✅  Mejorar el responsive design del proyecto (98% completado).
- ✅ Agregar una ficha de Imdb correspondiente cada película.

 - Agregar una película (y comprobar que uno haya una igual anteriormente).
 - Modificar datos de una película ya existente.
 - Eliminar una película existente.
 
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

