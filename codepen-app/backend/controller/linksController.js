import Link from "../model/links.js";


export default {

    create: async function (req, res, next) {

        const result = await Link.createLink(
            req.body.title,
            req.body.text,
            req.body.link
        );
        res.json(result);
    }
}
