//importar db
import db from "../db/conn";
// importar datatypes
import { DataTypes } from "sequelize";

// criar classe para tabela

const Animal = db.define("Animal", {

  // columns 
  name: {
    type: DataTypes.STRING,
    required: true,
  },

  especie: {
    type: DataTypes.STRING,
    required: true,
  },

  age: {
    type: DataTypes.FLOAT,
    required: true,
  },
});


module.exports = Animal;