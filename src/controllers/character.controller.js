import characters from '../models/characters';

//crear nuevo personaje
export async function createCharacter(req, res){
    const { name, picture, age, weight, story } = req.body;
    try {
        let newCharacter = await characters.create({
            name,
            picture,
            age,
            weight,
            story
        }, {
            fields: ['name', 'picture', 'age', 'weight', 'story']
        });
        if(newCharacter){
            return res.json({
                message: 'Character created successfully',
                data: newCharacter
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong',
            data: {}
        });
    }
}

//editar un personaje
export async function updateCharacter(req, res){
    
}

//eliminar un personaje
export async function deleteCharacter(req, res){

}

//Listado de personajes mostrando los campos: nombre e imagen
export async function getCharacters(req, res){
    try {
        const character = await characters.findAll({
            attributes: ['name', 'picture']
        });
        return res.json({
            data: character
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
}

//Devolver un personaje en especifico con todos sus campos; junto a las peliculas/series en las que participo
export async function getOneCharacter(req, res){

}

//Buscar por nombre, filtrar por edad, peso o pelicuas/series en las que participo