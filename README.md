# Arron Final Backend
> API REST dirigida al CRUD de productos con autenticación

Se desarrollo una API que a través de distintos endpoints permite el Log In de usuarios, ofreciendo seguridad mediante el uso de JWT
y permite el CRUD de productos mediante distintos endpoints.

## Instalación y uso

Para descargar los paquetes necesarios de la API: 

```sh
npm install
```

Crear archivo .env indicando:

```sh
PORT (Puerto en el que se va a levantar el servidor)
DBURL (Conexión a la base de datos)
JWT_KEY (Clave secreta para cifrar los tokens)
```

Inicialización:

```sh
npm start
```

## Endpoints

* /test
    * GET: Obtiene respuesta de estado del servidor y la base de datos

* /products
    * GET: Obtiene todos los productos
    * GET: Adjuntando /byId/:id al endpoint, obtiene un producto determinado
    * POST: Adjuntando un body que corresponda con los campos del producto, lo crea.
    * PUT: Adjuntando un id al endpoint y un body que corresponda con los campos del producto, lo actualiza
    * DELETE: Adjuntando un id al endpoint, elimina el producto

* /users
    * GET: Adjuntando /login al endpoint y un body con el email y la contraseña del usuario que corresponda, inicia sesión
    y devuelve las credenciales necesarias.

## Repositorio

https://github.com/fedeargfyron/MCGA-Final-Backend

## Produccion

https://mcga-final-backend-v2f-m5xtgxipz-fedeargfyron.vercel.app

## Tecnologias

* Node.js
* Express
* MongoDB (Database)
* JWT (Autenticación)