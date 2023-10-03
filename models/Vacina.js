import db from '../db/conn'

//dataTypes
import { DataTypes } from 'sequelize';
// importar classes relacionadas
import Animal from './Animal';

//definir classe

const Vacina = db.define('Vacina', {

    name: {
      type: DataTypes.STRING,
      required: true,
    },

    manufacturer: {
        type: DataTypes.STRING,
        required: true,
    },

    application: {
        type: DataTypes.DATE,
        required: true,
    }

});

Animal.hasMany(Vacina);
Vacina.belongsTo(Animal);

module.exports = Vacina;