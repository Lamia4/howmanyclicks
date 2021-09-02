import express from "express";
import dotenv from "dotenv";
import database from "./lib/database.js";


<<<<<<< HEAD
const server = express();

var cors = require('cors')

server.use(cors())

=======
dotenv.config();
>>>>>>> fbdb06bbf923b025758aa740ddd93aba68f1f996

database.init();


server.listen(process.env.PORT, () => {
    console.log("Server listening on Port 3435");
})

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get("/links", (req, res) => {
    let linksInfoLocalStorage = `[{"title":"CodePen","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.","imgUrl":"https://i.ytimg.com/vi/H46C8rEaVHg/maxresdefault.jpg","link":"https://codepen.io/trending"},{"title":"Youtube","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.","imgUrl":"https://www.sozunuz.com/wp-content/uploads/2020/11/Youtube-%C3%87%C3%B6kt%C3%BC.jpg","link":"https://www.youtube.com/"},{"title":"Amazon","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.","imgUrl":"https://www.schweitzer-projects.de/images/Inhalte/aktuell/amazon-de.jpg","link":"https://www.amazon.de/"}]`
    res.send(linksInfoLocalStorage);
})


