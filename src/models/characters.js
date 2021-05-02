import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const characters = sequelize.define('characters', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT,
    },
    picture: {
        type: Sequelize.BLOB
    },
    age: {
        type: Sequelize.INTEGER
    },
    weight: {
        type: Sequelize.INTEGER
    },
    story: {
        type: Sequelize.TEXT
    }
}, {
    timestampes: false
});


export default characters;