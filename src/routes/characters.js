import { Router } from 'express';
const router = Router();

import { createCharacter, getCharacters, getOneCharacter, deleteCharacter, updateCharacter } from '../controllers/character.controller';

// api/characters
router.post('/', createCharacter);
router.delete('/:id', deleteCharacter);
router.put('/:id', updateCharacter);

router.get('/', getCharacters);
router.get('/:id', getOneCharacter);

export default router;