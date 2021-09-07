import getUser from "../model/login.js";
import getToken from "../lib/token.js";

export default {
    loginByEmail: async function (req, res, next) {
        try {
            const authenticatedUser = await getUser.authenticate(req.body.email, req.body.password);
            // res.send("es funktioniert und der User ist da");
            if(authenticatedUser){
                const token = await getToken.createToken(req.body.password, req.body.email);
                console.log(token);
                res.send({token})
            }
            else {
                res.send("authentication failed")
            }
        } catch (error) {
            next(error);
        }
    },

}