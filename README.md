Web Kit Frontend para angular 1.4.x
===================================

Servidor web optimizado para trabajar con aplicaciones SPA (Single Page Application) de AngularJS.

# Entorno de desarrollo

En este repositorio encontraras un entorno de desarrollo para aplicaciones web creadas con el framework AngularJs, destacamos lo siguiente.-

* Servidor web con live reload.
* Inyector de dependencias con bower.
* Inyector de archivos js y css propios.

Solo te encargaras de crear tu aplicación, nosotros nos encargamos del resto...

## Como empezar

1.- Descarga o clona este repositorio en tu ordenador.

2.- Instala las dependencias del proyecto.-

```js
npm install
```

## Encender el servidor

El proyecto cuenta con la opción de encender solo el servidor, simplemente para ver en pantalla nuestra aplicación.-

http://127.0.0.1:3000

Para encender el servidor ejecuta el comando.-

```js
npm start
```

## Modo developer

En este modo podras estar inyectando archivos js, css y dependencias instaladas con bower al archivo index.html, ejecutando el siguiente comando para activarlo.-

```js
npm run dev
```