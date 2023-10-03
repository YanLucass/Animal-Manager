//importar models para comunicação com o BD
import Animal from "../models/Animal";
import Vacina from "../models/Vacina";

module.exports = class AnimalController {
  static async showHome(req, res) {
    const animals = await Animal.findAll({ raw: true });
    res.render("animals/home", { animals });
  }

  //CRIAR ANIMAIS
  static async showCreate(req, res) {
    res.render("animals/create");
  }

  static async createAnimals(req, res) {
    try {
      const animalData = {
        name: req.body.name,
        especie: req.body.especie,
        age: req.body.age,
      };

      console.log(animalData);
      await Animal.create(animalData);

      res.redirect("/animals");
    } catch (err) {
      console.log(err);
    }
  }

  //VISUALIZAR ANIMAL
  static async viewAnimal(req, res) {
    const id = req.params.id;
    const animal = await Animal.findOne({ where: { id: id }, raw: true });
    res.render("animals/viewAnimal", { animal });
  }

  //EDITAR ANIMAL

  static async editAnimal(req, res) {
    try {
      const id = req.params.id;
      const animal = await Animal.findOne({
        include: Vacina,
        where: { id: id },
      });
      console.log(animal);
      res.render("animals/editAnimal", { animal: animal.get({ plain: true }) });
    } catch (err) {
      console.log(err);
    }
  }

  // ATUALIZAR ANIMAL
  static async updateAnimal(req, res) {
    try {
      const id = req.body.id;
      const animalData = {
        name: req.body.name,
        especie: req.body.especie,
        age: req.body.age,
      };

      await Animal.update(animalData, { where: { id: id } });
      res.redirect("/animals");
    } catch (err) {
      console.log(err);
    }
  }

  //DELETAR ANIMAL
  static async deleteAnimal(req, res) {
    try {
      const id = req.body.id;
      await Animal.destroy({ where: { id: id } });
      res.redirect("/animals");
    } catch (err) {
      console.log(err);
    }
  }
};
