import express from "express";
import { engine } from "express-handlebars";

const app = express();
const port = 5000;
const people = [
    {"name": "ivan", "age": 22},
    {"name": "dragan", "age": 25},
];
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));
app.engine("hbs", engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");



app.get("/", (req, res) => {
    res.render("home")
});

app.get("/catalogue", (req, res) => {
    res.render("catalogue", {people})
})

app.get("/create", (req, res) => {
    res.render("add")
})
    
app.post("/create", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const person = {name, age};
    people.push(person);

    res.redirect("/catalogue");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})
