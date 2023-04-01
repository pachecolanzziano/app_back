# app_back

# Implementacion Back:

- comandos de instalacion
# Crear una carpeta para el proyecto ej: app
# verifica si se tiene instalado node.
node -v 

# iniciar un proyecto con node
npm i  --yes

# levantar el servidor web 
npm i express

# se crea una carpeta raiz SRC y se crea un archivo app.ts, este sera el archivo principal para nuestro servidor web.

# Nodemon: se encarga de reiniciar el server cada vez que se efectua un cambio (esto es una herramienta de Desarrollo -D)
npm i nodemon -D

# para arrancar el servidor usamos 
npm run dev

# este puede ser modificado en el package.json, por convencion usare dev
# Mongo DB - este proyecto trabajara con Mongo Atlas (implementar la DB de su preferencia)
npm i mongoose

# .env: uso de variables de entorno (super importante) al final del proyecto, crea un archivo .env.copy, para que suba al repositorio, ya que el .env esta en el gitIgnore.

# Multer: librerias para manejo de archivos
mpn i multer

# Bcryptjs: encryptador de contraseñas - JsonWebToken (JWT)
npm i bcryptjs
npm i jsonwebtoken

# Tipados de Bcryptjs y JsonWebToken
npm i @types/bcryptjs @types/jsonwebtoken -D

# instalar Typescript de manera global
npm i typescript -g

# Ts integrado a node
npm i ts-node -g

# Nodemon Global
npm i nodemon -g

# 

