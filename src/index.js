import dotenv from "dotenv";
dotenv.config(); // Traemos las variables de entorno del archivo .env
import express from "express"; // importamos express que sera para nuestro servidor
import { router } from "./presentation/routes/muebles.routes.js"; // importamos las rutas que va manejar

const app = express();

// Habilitamos para que se puedan enviar archivos
app.use(express.urlencoded({ extended: true }));


// Activamos Pug y los archivos estaticos como css,img.files,etc
app.set("view engine", "pug");
app.set("views", "./client/views");
app.use(express.static("./client/public"));

// Le decimos a express que use las rutas
app.use("/", router);

const PORT = process.env.PORT || 3001;
// Indicamos que inicie el servidor en el puero definido en las variables de entorno
app.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}`);
});
