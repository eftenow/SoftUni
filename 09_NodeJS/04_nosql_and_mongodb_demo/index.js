import { engine } from 'express-handlebars';
import express from 'express';
import { movieRouter } from './controllers/movieController.js';
import mongoose from 'mongoose';

const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: false }));


app.set("view engine", "hbs");
app.engine("hbs", engine({
    extname: "hbs",
    
}));


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}


app.use('/', movieRouter);


app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}...`);
    } else
        console.log("Error occurred, server can't start", error);
}
); 