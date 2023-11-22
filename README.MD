# App Basica De Node Dockerizada

Aplicacion con 2 enpoint, uno para obtener un listado de productos y otro para crear un producto.

## Intalacion de dependencias sin docker

Instalar dependencias con npm.

```bash
  npm install
```

## Correr API

Iniciar API local, con nodemon. Que tiene livereload. (Cuando se realiza un cambio reinicia la API)

```bash
  npm run dev
```

Iniciar API produccion. 

```bash
  npm run start
```
## Crear imagen docker

Crear la imagen docker.
Quitar los []

```bash
  docker build . -t [app-name] 
```

Iniciar imagen docker

```bash
   docker run -p [puerto expuesto]:[puerto interno] docker-test-app  
```

## API Reference

## Obtener listado de productos

Enpoint para obtener listado de todos los productos, si no se han creado devolver un mensaje.

```http
  GET http://localhost:3500/all-products
```

#####Paramentros de entrada. Payload

No recibe parametros



#####Payload de salida

No existen prductos

```javascript
{
    "msg": "Aun no se crea productos"
}
```

Parametros de salida.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| msg | `string` | Mensaje informativo |

Si existen prductos

```javascript
{
    "products": [
        {
            "id": 1700682328623,
            "name": "tv"
        }
    ]
}
```

Parametros de salida.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| products | `object` | Lista de productos |



## Crear un Producto

Enpoint para crear un producto.

```http
  POST http://localhost:3500/create-product
```

Paramentros de entrada. Payload

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| name | `string` | Nombre del producto |


Payload de entrada

```javascript
    {
        "name": "tv"
    }
```

```javascript
    {
        "name": "pc"
    }
```

Parametros de salida.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| msg | `string` | Mensaje de producto creado |

Payload de salida

```javascript
    {
        "msg": "Product create"
    }
```

Error al tratar de crear un producto sin name o name vacio

Payload de entrada

```javascript
    {
        "name": ""
    }
```

Parametros de salida.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| msg | `string` | Mensaje informativo |

Payload de salida

```javascript
    {
        "msg": "Todos los campos son obligatorios"
    }
```

