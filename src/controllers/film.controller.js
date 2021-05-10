import film from '../models/Film';

//crear nueva pelicula/serie
export async function createFilm(req, res) {
    const { title, picture, creationdate, rating, genre } = req.body;
    try {
        let newFilm = await film.create({
            title,
            picture,
            creationdate,
            rating,
            genre
        }, {
            fields: ['title', 'picture', 'creationdate', 'rating', 'genre']
        });
        if(newFilm) {
            return res.json({
                message: 'Film created successfully',
                data: newFilm
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong',
            data: {}
        });
    }
    
};

//editar una pelicula/serie
export async function updateFilm(req, res){
    try {
        const { id } = req.params;
        const { title, picture, creationdate, rating, genre } = req.body;

        const films = await film.update({
            title,
            picture,
            creationdate,
            rating,
            genre
        },
        {
            where: { id }
        }, {});
            return res.json({
                message: 'Updated film which id is: '+ id,
                data: films
            });
        
    } catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

//eliminar una pelicula/serie
export async function deleteFilm(req, res) {
    try {
        const { id } = req.params;
        const deletedRowCount = await film.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Film deleted successfully',
            count: deletedRowCount
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
}

//Listado de peliculas mostrando los campos: titulo, fecha de creacion e imagen
export async function getFilm(req, res) {
    try {
        const films = await film.findAll({
            attributes: ['title', 'creationdate', 'picture']
        });
        res.json({
            data: films
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
}

//Devolver una pelicula en especifico con todos sus campos; junto a los personajes que participaron
export async function getOneFilm(req, res) {
    try {
        const { id } = req.params;
        const films = await film.findOne({
            where: {
                id
            }
        });
        res.json(films);
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
}

//Buscar por título, filtrar por generar, ordenar asc o desc por fecha de creación (req)

