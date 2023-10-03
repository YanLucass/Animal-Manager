import express from "express";
const router = express.Router();

//importar controller necessário
import VacinaController from "../controllers/VacinaController";

router.post("/add", VacinaController.addVacina);
router.post("/delete", VacinaController.delete);

//exportar rota

module.exports = router;
