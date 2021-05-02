import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import filmRoutes from './routes/films';
import characterRoutes from './routes/characters';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/films', filmRoutes);
app.use('/api/characters', characterRoutes)


export default app;