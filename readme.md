# Notes app
***
### Tecnologias utilizadas:
1. Javascript
2. Node.js
3. Express.js
***
## Pasos para la instalación:
```
$ git clone git@github.com:ayrtoncravero/notes.git
$ cd notes
$ npm install (Instalacion de dependecias)
$ npm run dev (Ejecutar el servidor)
```
- El servidor esta disponible en 'http://localhost:3000/'
```
- Configuracion de base de datos:
1- Acceder a Mysql: 
$ mysql -uroot -p

2- Correr el siguiente comando para crear la base de datos:
$ CREATE DATABASE notes;

3- Seleccionar la base de datos creada:
$ USE notes;

4- Crear tabla users:
$ CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

5- Agregar clave primaria:
$ ALTER TABLE users
    ADD PRIMARY KEY (id);
    
6- Agregar id auto incremental:
$ ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
7- Crear tabla notes:
$ CREATE TABLE notes(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

8- Agregar clave primaria:
$ ALTER TABLE notes
    ADD PRIMARY KEY (id);
    
9- Agregar id auto incremental:
$ ALTER TABLE notes
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
```
***
## Información extra:
- Este proyecto fue desarrollado para el aprendizaje de Node.js, Express.js y Mysql.
