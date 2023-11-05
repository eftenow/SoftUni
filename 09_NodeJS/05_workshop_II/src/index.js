import express from 'express';

import { router } from './routes.js';
import { initializeDatabase } from './config/database.js';
import { initializeHandlebars } from './config/handlebars.js';


const port = 5000;
const app = express();
app.use(express.static("../public"));
app.use(express.urlencoded({ extended: false }));

initializeHandlebars(app);

initializeDatabase()
    .then(
        app.listen(port, () => console.log(`App listening to port ${port}...`))
    )
    .catch((error) => console.log(`Database couldn't load: ${error}`));


app.use(router);
