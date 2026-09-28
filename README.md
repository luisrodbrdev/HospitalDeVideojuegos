# Hospital de Videojuegos: base de rediseño

Prototipo estático de una página informativa. Abre `index.html` en un navegador; no requiere instalación ni claves. Para probarlo con un servidor local, ejecuta `python3 -m http.server 8000` en esta carpeta y visita `http://localhost:8000`.

## Datos reutilizados de la web actual

Fuente: https://sites.google.com/view/hospital-de-videojuegos

- Nombre: Hospital de Videojuegos.
- Teléfono publicado: 55 2748 2037.
- Dirección publicada: Convento de Capuchinas #10, esquina Convento de Acolman, Col. Jardines de Santa Mónica, Tlalnepantla, Estado de México, 54050.
- Horario publicado: lunes a viernes 12:30–20:00; sábado 11:30–20:00; domingo 11:30–15:00.
- Servicios citados en sus imágenes: reparaciones de PlayStation, Xbox, Nintendo Switch, controles y consolas clásicas. Se mencionan fallas de HDMI, encendido, lectura, pantalla, carga y almacenamiento.
- Foto de la fachada: copia de la imagen pública de su web, **solo para este prototipo**. Confirmar permiso y obtener una foto actual antes de publicar.

## Decisiones de esta base

- Sitio de una sola página, adaptable a móvil, sin framework ni dependencias.
- Diseño fotográfico con una dirección más gamer: portada asimétrica con foto de reparación a gran escala, titular condensado, una curva hacia servicios, tarjetas redondeadas de tamaños distintos y horarios con cifras de estilo técnico. Se mantienen textos legibles y la opción de reducir movimiento.
- Las fotografías de reparación y de los banners son ilustrativas de Pexels, no fotografías de este taller: [Timur Zh](https://www.pexels.com/photo/black-and-white-close-up-of-game-controller-repair-36027094/), [FOX](https://www.pexels.com/photo/interior-of-gaming-controller-19987742/), [Anthony](https://www.pexels.com/photo/a-game-console-on-a-wooden-surface-5626726/), [Polina Tankilevitch](https://www.pexels.com/photo/a-hand-holding-nintendo-switch-4523012/) y [Mateusz Dach](https://www.pexels.com/photo/retro-video-game-console-on-table-at-home-4502975/). Las páginas indican uso gratuito bajo la [licencia de Pexels](https://www.pexels.com/license/). Sustituirlas por imágenes propias del taller cuando existan.
- Las cuatro tarjetas del bento muestran PlayStation y Xbox, Nintendo Switch, consolas clásicas y controles. La cuarta usa la foto de un control abierto ya presente en `assets/`; **todavía falta una foto de PlayStation** para combinarla con la de Xbox. En computadoras, los detalles suben al pasar el cursor o enfocar cada tarjeta con el teclado; en pantallas táctiles permanecen visibles.
- La franja de plataformas se desplaza continuamente y se detiene al pasar el cursor. Las secciones entran con una animación breve cuando el navegador admite `IntersectionObserver`; con movimiento reducido permanecen estáticas.
- El indicador de apertura y el bloque «Hoy» usan `America/Mexico_City`, no la zona horaria del visitante. El horario está en `script.js` y se actualiza cada minuto o al volver a la pestaña. La tabla semanal marca el día actual con texto además de color. Calcula el horario **habitual**; aún no contempla días festivos, vacaciones ni cierres extraordinarios.
- El enlace y el mapa embebido usan una búsqueda por la dirección publicada. Confirmar que señalan la entrada correcta.
- Hay botones de WhatsApp que apuntan al número publicado, 55 2748 2037, y se conserva la llamada telefónica. **Confirmar con el negocio que ese número recibe WhatsApp antes de publicar.**

## Por confirmar con el negocio

1. Nombre comercial, logo, identidad visual, teléfono, si ese número recibe WhatsApp, dirección y horario vigentes; días festivos y cierres especiales.
2. Modelos que reciben actualmente, servicios exactos, proceso de diagnóstico y si hay garantía.
3. Fotografías propias recientes, testimonios auténticos y permiso para usar material del sitio anterior.
4. Objetivo principal: visitas al local, llamadas, mensajes o solicitudes de presupuesto.
5. Dominio, plataforma, hosting, mantenimiento, fecha deseada y presupuesto. No se ha definido precio ni publicación.

## Seguridad y privacidad

Riesgo **básico** en este alcance: no hay cuentas, formularios, pagos, backend, base de datos, archivos subidos, panel administrativo ni APIs con claves. El navegador solo calcula el horario con datos públicos. La página no recopila datos personales directamente; al cargar el mapa embebido, el navegador se conecta con Google. Los enlaces `tel:`, WhatsApp y Google Maps salen del sitio; revisar HTTPS, privacidad, contenido, enlaces y configuración del hosting antes de publicar. Por ahora no hacen falta términos comerciales del sitio, ya que aquí no se contrata, reserva ni paga en línea. Si se añade un formulario, WhatsApp automatizado, reservaciones o pagos, habrá que reevaluar privacidad, seguridad y políticas.
