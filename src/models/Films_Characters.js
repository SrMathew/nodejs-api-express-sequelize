import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Film from './Film';
import characters from './characters';

const Films_Characters = sequelize.define('films_characters', {
    filmsID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Film,
            key: 'id'
        }
    },
    charactersID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: characters,
            key: 'id'
        }
    }
}, {
    timestampes: false
});

characters.belongsToMany(Film, { through: 'films_characters' });
Film.belongsToMany(characters, { through: 'films_characters' });

export default Films_Characters;