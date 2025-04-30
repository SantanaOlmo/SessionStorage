# SessionStorage

### Proceso de trabajo
1. Creación del repositorio remoto y local
2. Cración de la estructura de carpetas y archivos
3. Archivo _index.html_
4. Aplicación del diseño con _styles.css_
5. Desarrollo del archivo _confirmacion.html_ con las clases e ids usados en index.html para reutilizar _styles.css_
6. Revisión del enunciado del ejercicio
7. Desarrollo el archivo _script.js_


#### Desarrollo del script
El mayor problema que me he encontrado a la hora de realizar el script del proyecto lo he encontrado a la hora de cambiar de pagina y mantener los elementos guardados en el sessionStorage y en el cambio de página en sí. 

Aunque sabía que el cambio de página en javaScript se hacía con window.location.href="rutadelarchivo"; en el _index.html_ no llegaba el código a ejecutar tal línea. De hecho, como he dejado en el comentario, he tenido que escribir un _alert()_ escribiendo un mensaje para que no entiendo muy bien por qué, al pasar llegar al alert, obligatoriamente ha tenido que pasar por la línea de cambio de archivo y de esa forma la ejecuta.

Para verificar que me encuentro en el archivo _confirmacion.html_ he tenido problemas ya que al parecer, la ruta es más larga de lo que me devuelve VSCode al copiar manualmente la ruta relativa: "confirmacion.html". Por eso mismo, he tenido que utilizar, en el else if,una condición diferente a la que uso para verificar que me encuentro en un archivo u otro:
```
if(indow.location.pathname === "/index.html"){

}else if(window.location.pathname.endsWith('/confirmacion.html')){

}
```

Del mismo modo, he tenido otros casos en los que he tenido que usar, en ambos archivos,diferentes formas para conseguir resultados idénticos.En _index.html_ el boton funciona mediante el _boton.addEventListener("click",function(){})_ y en _confirmacion.html_ eso mismo no me funcionaba y opté por utilizar _onclick_="window.location.href='index.html'"_ dentro de la propia etiqueta del botón.

#### Uso de IA
Podría volver a sacar todo el código excepto varias líneas que aún me suenan raras:

```
let metodoPago = metodoPagoHtml ? metodoPagoHtml.value : null;
```
El interrogante está como preguntando si existe ese elemento. Si existe, nos quedamos la primera parte tras el interrogante y antes de los dos puntos (metodoPagoHtml.value), y en caso contrario nos quedamos con lo que venga tras los dos puntos. De esa forma asignamos algo a la variable metodoPago, ya sea el valor o null, pero no le asignamos el vacío.
Por eso, era importante en todos los input además del name="metodo" añadirles un atributo value, para que pueda luego acceder a ese valor y añadirlo a otra variable. 
Y el name"metodo" era importante que fuese el mismo para todos los input, ya que luego accedería al que estuviese seleccionado con la siguiente línea:


```
const metodoPagoHtml = document.querySelector('input[name="metodo"]:checked');
```
En este caso, utilizo esto porque no busco un elemento con un id concreto, sino que busco una opcion seleccionada. De todos los elementos con nombre "metodo" (refiriéndose al método de pago) necesito quedarme con la opción que se haya pulsado. Si no existe, se asigna null.

&copy 2025 Alberto Estepa Gómez