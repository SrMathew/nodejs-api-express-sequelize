import { Router } from 'express';
const router = Router();

import { createFilm, getFilm, getOneFilm, deleteFilm } from '../controllers/film.controller';

// api/films
router.post('/', createFilm);
router.delete('/:id', deleteFilm);

router.get('/', getFilm);
router.get('/:id', getOneFilm);



export default router;