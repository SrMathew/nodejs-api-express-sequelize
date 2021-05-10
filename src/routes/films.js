import { Router } from 'express';
const router = Router();

import { createFilm, getFilm, getOneFilm, deleteFilm, updateFilm } from '../controllers/film.controller';

// api/films
router.post('/', createFilm);
router.delete('/:id', deleteFilm);
router.put('/:id', updateFilm);

router.get('/', getFilm);
router.get('/:id', getOneFilm);



export default router;