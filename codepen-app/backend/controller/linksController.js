import Link from "../model/links.js";


export default {

    create: async function (req, res, next) {

        const result = await Link.createLink(
            req.body.title,
            req.body.text,
            req.body.imgUrl,
            req.body.link
        );
        res.json(result);
    },

    readAll: async function (req, res, next) {
        console.log("es funktioniert");
        const result = await Link.readAll();
        res.json(result);
    },
}
