// importar el componente Router para manejar rutas
import { Router } from "express";

// definir una instancia del enrutador con Router()
const router = Router();


// describir las rutas a usar y que van a mostrar pasando parametros desde el BE al FE
// las vistas principales que estan dentro de carpeta /views
router.get("/", (req, res) => {
  res.render("index", { title: "First Web Node" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About First Node Website" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

export default router;
