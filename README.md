# MUEBLES

Esta es una aplicación simple organizada utilizando el modelo de tres capas con Prisma para el acceso a datos.

## Estructura de Directorios

- **client/**: Dentro de este directorio se encuentras las vistas en html y recursos que luego se llaman desde la capa de presentación para servirlas con express en el archivo de `muebles.routes.js`.

- **prisma/**: Directorio que contiene archivos relacionados con Prisma.

  - `schema.prisma`: Archivo donde defines tu modelo de datos y la configuración de la conexión a la base de datos.

- **src/**: Directorio principal de la aplicación.

  - **presentation/**: Capa de presentación.

    - **routes/**: Directorio que contiene los archivos de rutas.
      - `muebles.routes.js`: Archivo que contiene las rutas y la lógica de presentación utilizando Express.

  - **business/**: Capa de lógica de negocio.

    - `muebles.js`: Archivo que contiene la lógica de negocio relacionada con las tareas.

  - `index.js`: Archivo principal que se ejecuta para configurar y arrancar la aplicación Express.

- `package.json`: Archivo que contiene la configuración del proyecto y las dependencias.

## Instalación

Instalamos las dependencias

```
npm i
```

Configuramos el `.env` en el directorio principal en caso de no existir lo creamos.

Recordar que se tiene que crear la base de datos el nombre puede ser cualquiera si no tiene clave la base de datos crear un usuario con todos los privilegios

```
# Pueto donde se ejecutara el servidor
PORT=3000

# Cadena de conexion
# USER_DB= root
# PASS_USER= 123456
# HOST=172.17.0.2 o localhost(127.0.0.1) si todo esta en la maquina o donde propocione la db
# DB_NAME=muebles
DATABASE_URL="mysql://root:123456@172.17.0.2:3306/muebles"

```

## Ejecutamos las migraciones

Para que se puedan crear las tablas en la DB hay que ejecutar las migraciones esto agarrara el schema.prisma y mapeara todo a mysql

```
npx prisma migrate dev
```

pedira que ingreses el nombre de la migracion en este caso es a dispocición solo no ingresar textos con espacio y todo en minuscula

## Levanta el servidor

```
# Modo desarrollo
npm run serve
# Para producción cuando se suba a algun servicio
npm start
```
