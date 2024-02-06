import { Router } from "express";
import { createMueble, createMuebleMelamina, listAllMelamina, listMuebles } from "../../business/muebles.js";

const router = Router()

router.get('/', async (req,res) => {
    const muebles = await listMuebles();
    res.render('mueble/inicio',{ muebles })
})

router.get("/mueble", async (req, res) => {
  const melaminas = await listAllMelamina();
  res.render("mueble/mueble", { melaminas });
});

router.post("/mueble", async (req, res) => {
    const responseCreate = await createMueble(req.body)
    if (responseCreate) {
      res.redirect("/");
    }
});

router.get("/mueble-melamina", (req, res) => {
  res.render("mueble/mueble-melamina");
});

router.post("/mueble-melamina", async (req,res) => {
    const responseCreate = await createMuebleMelamina(req.body)
    if (responseCreate) {
        res.render("mueble/mueble-melamina", {
          msg: "se creo un nuebo registro de mueble melamina",
        });
    }
});


export {
    router
}