---
title: 'Cuándo utilizar la generación estática frente a la renderización en el lado del servidor'
date: '2023-05-09'
---

Recomendamos usar la Generación Estática (con y sin datos) siempre que sea posible, ya que su página se puede construir una vez y servir mediante CDN, lo que la hace mucho más rápida que tener que renderizar la página en cada solicitud del usuario.

Puede utilizar la Generación Estática para muchos tipos de páginas, incluyendo:

Páginas de marketing
Publicaciones de blog
Listados de productos de comercio electrónico
Ayuda y documentación
Debe preguntarse: "¿Puedo pre-renderizar esta página antes de la solicitud del usuario?" Si la respuesta es sí, entonces debería elegir la Generación Estática.

Por otro lado, la Generación Estática no es una buena idea si no puede pre-renderizar una página antes de la solicitud del usuario. Quizás su página muestre datos actualizados con frecuencia y el contenido de la página cambie en cada solicitud.

En ese caso, puede utilizar la Renderización en el lado del servidor. Será más lento, pero la página pre-renderizada siempre estará actualizada. O puede omitir la pre-renderización y utilizar JavaScript en el lado del cliente para poblar los datos.




