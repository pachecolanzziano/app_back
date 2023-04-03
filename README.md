# app_back

const query = UserModel.find({ name: 'Jean-Luc Picard' });
query.getFilter();

npm i 
npm uninstall

####Implementacion Back:

- comandos de instalacion
- Crear una carpeta para el proyecto ej: app
- verifica si se tiene instalado node.
node -v 

####  iniciar un proyecto con node
npm i  --yes

#### levantar el servidor web 
npm i express

##### se crea una carpeta raiz SRC y se crea un archivo app.ts, este sera el archivo principal para nuestro servidor web.

##### Nodemon: se encarga de reiniciar el server cada vez que se efectua un cambio (esto es una herramienta de Desarrollo -D)
npm i nodemon -D

#### Nodemon Global
npm i nodemon -g

##### para arrancar el servidor usamos 
npm run dev
##### -este puede ser modificado en el package.json, por convencion usare dev

#### Mongo DB - este proyecto trabajara con Mongo Atlas (implementar la DB de su preferencia)
npm i mongoose

##### .env: uso de variables de entorno (super importante) al final del proyecto, crea un archivo .env.copy, para que suba al repositorio, ya que el .env esta en el gitIgnore.

#### Multer: librerias para manejo de archivos
mpn i multer

#### Bcryptjs: encryptador de contraseñas - JsonWebToken (JWT)
npm i bcryptjs
npm i jsonwebtoken

#### Tipados de Bcryptjs y JsonWebToken
npm i @types/bcryptjs @types/jsonwebtoken -D

#### instalar Typescript de manera global
npm i typescript -g

#### Ts integrado a node
npm i ts-node -g

#### Iniciar proyecto con Typescript
npm i tsc --init

npm init -y

#### dependencias necesarias
npm i express cors dotenv multer mongoose

#### paquete de tipados
npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D

##### En routes existe un archivo index, que genera y exporta dinamicamente los modulos de las rutas gracias a Router().

#### cada ruta debe llamar su respectivo controlador para gestionar su tarea segun el protocolo necesario GET, POST, PUT , DELETE
#### cada cotrolador debe llamar su respectivo servicios donde se realizan todas las tareas de manera detallada. 


#### aparecen los manejadores (handle) en los controladores. en este caso un controlador de errores.
#### se crea una carpeta llamada util donde se guardaran

### se accede a la base de datos desde los servicios, por lo cual nace la carpeta MODEL para nuestros modelos ed las DB

#### y a su ves la carpeta interfaz para cada uno de los usuarios
