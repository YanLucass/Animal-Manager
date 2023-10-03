import express from "express";
const router = express.Router();

import AnimalController from "../controllers/AnimalController";

//cadastro
router.get("/create", AnimalController.showCreate);
router.post("/create", AnimalController.createAnimals);

//visualizar um animal
router.get("/viewAnimal/:id", AnimalController.viewAnimal);

//editar animal
router.get("/edit/:id", AnimalController.editAnimal);
router.post("/edit", AnimalController.updateAnimal);

//deletar animal
router.post("/delete/:id", AnimalController.deleteAnimal);

//visualizar vacinas

//home
router.get("/", AnimalController.showHome);

module.exports = router;
