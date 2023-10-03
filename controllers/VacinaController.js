//importar model necessário
import Vacina from "../models/Vacina";
//exportar classe

module.exports = class VacinaController {
  //adcionar vacina
  static async addVacina(req, res) {
    try {
      const AnimalId = req.body.AnimalId;
      const vacinaData = {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        application: req.body.application,
        AnimalId,
      };
      await Vacina.create(vacinaData);
      res.redirect(`/animals/edit/${AnimalId}`);
    } catch (err) {
      console.log(err);
    }
  }

  // deletar vacina
  static async delete(req, res) {
    try {
      const id = req.body.id;
      const AnimalId = req.body.AnimalId;
      console.log(id, AnimalId);
      await Vacina.destroy({ where: { id: id } });
      res.redirect(`/animals/edit/${AnimalId}`);
    } catch (err) {
      console.log(err);
    }
  }
};
