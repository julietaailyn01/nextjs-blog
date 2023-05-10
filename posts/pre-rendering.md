---
title: 'Dos formas de pre-renderizado'
date: '2023-05-10'
---

Next.js tiene dos formas de pre-renderizar: Generación Estática y Renderizado del lado del servidor. La diferencia radica en cuándo se genera el HTML de una página.

Generación Estática es el método de pre-renderizado que genera el HTML en el momento de compilación. El HTML pre-renderizado se reutiliza en cada solicitud.
Renderizado del lado del servidor es el método de pre-renderizado que genera el HTML en cada solicitud.
Es importante destacar que Next.js te permite elegir qué forma de pre-renderizado utilizar para cada página. Puedes crear una aplicación "híbrida" de Next.js utilizando la Generación Estática para la mayoría de las páginas y el Renderizado del lado del servidor para otras.