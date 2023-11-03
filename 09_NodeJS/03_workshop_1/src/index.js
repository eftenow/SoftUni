import express from "express";
import { engine } from "express-handlebars";
import { router } from "./routes.js";

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static"));

app.set('view engine', 'hbs');

app.engine('hbs', engine({
    extname: "hbs",
}));


app.use(router);


app.listen(port, () => {
    console.log("Server is running on port ", port);
})

