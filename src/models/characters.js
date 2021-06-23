import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const characters = sequelize.define('characters', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    picture: {
        type: Sequelize.BLOB
    },
    age: {
        type: Sequelize.INTEGER,
        validate: {
            isInt: true,
            min: 1
        }
    },
    weight: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1
        }
    },
    story: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});


export default characters;