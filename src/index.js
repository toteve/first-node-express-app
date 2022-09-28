// Index.js principal que arranca el servidor, define donde estan las rutas y otras configuraciones

// importamos el framework a usar que sera express, con "type": "module" acepta ECS en el Pack.json
import express from "express"; // COMMOM JS => const express = require('express')
// importamos para controlar respuestas de operaciones internas del servidor en consola
import morgan from "morgan";

// destructuring para usar componentes de path y url, que pertenecen a Node Js
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Routes desde donde procesaremos las rutas  para no colocarlas en el Index.js
import indexRoutes from "./routes/index.js";

// Initialize express invocando una instancia de express()
const app = express();

// para tener acceso a la ruta ABSOLUTA en forma dinamica
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("_dirname: ",__dirname)

// settings con .set seteamos el uso del puerto si hay definido en .env o 3000 por default
app.set("port", process.env.PORT || 3000);


// definimos la ruta para las vistas principaes (archivos .ejs) en carpeta views
app.set("views", join(__dirname, "views"));
// definimos como motor de vistas a ejs que importamos, ver package.json, esta integrado a express
// los archivos de la carpeta views su extension sera .ejs para indicar que son plantillas
app.set("view engine", "ejs");

// middlewares a utilizar

// poniendo en arranque a morgan en modo desarrollo
app.use(morgan("dev"));

// routes dando acceso a las rutas
app.use(indexRoutes);

// static files public para ruta de carpeta  de archivos estaticos
app.use(express.static(join(__dirname, "public")));

// listening the Server  escuchando el servidor segun puerto a utilizar
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
