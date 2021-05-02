import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const Film = sequelize.define('Film', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    title: {
        type: Sequelize.TEXT,
    },
    picture: {
        type: Sequelize.BLOB
    },
    creationdate: {
        type: Sequelize.DATE
    },
    rating: {
        type: Sequelize.INTEGER
    },
    genre: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});


export default Film;