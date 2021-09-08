import Link from "../model/links.js";

export default {


    read: async function (req, res, next) {
        
        console.log(req.params.linkTitle);
        console.log("es funktioniert");
        const result = await Link.findLink(req.params.linkTitle);
        res.redirect(result.link)
    },
}