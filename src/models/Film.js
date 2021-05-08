import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const Film = sequelize.define('Film', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    picture: {
        type: Sequelize.BLOB
    },
    creationdate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        validate: {
            isInt: true,
            min: 1,
            max: 5
        }
    },
    genre: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});


export default Film;