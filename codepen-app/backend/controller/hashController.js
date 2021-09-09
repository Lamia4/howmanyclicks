import Link from "../model/links.js";

export default {


    read: async function (req, res, next) {
        
        const linkTitle = req.params.linkTitle;
        console.log("hier ist der titel",linkTitle);
        const result= await Link.findLink(linkTitle);
        // .then((result) => res.redirect(result.link))
        console.log(result);
        // res.send(result);
        res.redirect(result.link)
    },
}