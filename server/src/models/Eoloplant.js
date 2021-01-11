import { sequelize, Model, DataTypes } from './../config/db.js';
import { sendWSMessage } from '../config/ws.js';

export default class EoloPlant extends Model {}

EoloPlant.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    progress: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    weather: DataTypes.STRING,
    landscape: DataTypes.STRING
    }, {
    sequelize,
    modelName: 'EoloPlant',
    tableName: 'EoloPlants'
});

export async function updateEoloplantStatus(eoloplant) {
    const {
        city,
        id,
        progress = 0,
        planning = null,
        completed = false
    } = eoloplant;

    const eoloplantFromDB = await EoloPlant.findOne({
        where: {
            id
        }
    });

    eoloplantFromDB.progress = progress;
    eoloplantFromDB.planning = planning;
    eoloplantFromDB.completed = completed;

    await eoloplantFromDB.save();
    sendWSMessage({
        data: JSON.stringify(eoloplant)
    });
    return eoloplantFromDB;
}
