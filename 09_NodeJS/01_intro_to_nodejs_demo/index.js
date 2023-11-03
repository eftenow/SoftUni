import { readFile } from 'fs/promises';
import http from 'http';
import { catTemplate } from './catTemplate.js';


const server = http.createServer(async (req, res) => {
    const url = req.url
    let headData = { "Content-Type": "text/html" };

    if (url == "/styles/site.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        let siteCss = await readFile("./styles/site.css", "utf-8");
        res.write(siteCss);
    } else if (url === "/cats/add-breed") {
        res.writeHead(200, headData);
        const data = await readFile("./views/addBreed.html");
        res.write(data);
    } else if (url === "/cats/add-cat") {
        res.writeHead(200, headData);
        const data = await readFile("./views/addCat.html");
        res.write(data);
    } else {
        res.writeHead(200, headData);
        const queryParams = url.split("?")[1];
        const searchedText = queryParams?.split('=')[1] || "";

        const cats = JSON.parse(await readFile("./cats.json", { encoding: "utf-8" }));
        const catsHtml = await readFile("./views/home/index.html", { encoding: "utf-8" });
        const modifiedCatsHtml = catsHtml.replace("{{cats}}",
         cats
         .filter(cat => cat.name.toLowerCase().startsWith(searchedText.toLowerCase()))
         .map(cat => catTemplate(cat)));

        
        console.log(searchedText);
        res.write(modifiedCatsHtml);
    }


    res.end();
});


server.listen(5000, "localhost", () => {
    console.log("Server running at port 5000....");
})

