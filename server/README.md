# meli-test

Api desarrollada con ts, nodejs, express,,swagger, jest <br>
Se utilizo una arquitectura hexagonal para la estructura de la api utiliza
patrónes de diseño como inversión de control, inyeccion de dependencias y la separacion
de responsabilidades.

## Configuracion

Renombrar el archivo `.env-example ` por `.env ` en la raiz <br>
Cambiar la información del archivo con tu informacion local <br>

Ejecutar el comando para instalar todas las librerias del proyecto <br>

```
npm install -all
```

# Ejecucion

Ejecutar el proyecto en modo dev <br>

```
npm run dev
```

Abrir en su navegador
`http://localhost:3000/api-docs`

Te aparecerá una ventana de swagger con todos los endpoints <br>

## Tests

Para ejecutar los tests con jest <br>

```
npm run test
```

## Deploy en AWS:

Primero transpilamos a js y guardamos el transpilado en dist con el siguiente comando:

```
npm run build
```

Despues desplegamos para esto debimos ya configurar nuestras credenciales en `serverless credentials'

```
serverless deploy
```

La url publica con swagger es:
https://r6qzxkgt4nnxrb5i7i65ldlyju0wshly.lambda-url.us-east-1.on.aws/api-docs/
