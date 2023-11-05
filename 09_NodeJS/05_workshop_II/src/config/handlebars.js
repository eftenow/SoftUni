import { engine } from 'express-handlebars';

export const initializeHandlebars = (app) => {
    app.set("view engine", "hbs");
    app.engine('hbs', engine({
        extname: "hbs"
    }))
}