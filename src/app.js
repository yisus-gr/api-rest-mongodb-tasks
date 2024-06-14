//configuracion del servidor
import express from 'express';
import TasksRoutes from './routes/tasks.routes';

const app = express();
//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

app.use('/api/tasks',TasksRoutes); //ruta de la api


export default app;