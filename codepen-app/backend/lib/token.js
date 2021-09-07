import jwt from "jsonwebtoken";

export default {
    createToken : function (email, password) {

        const secret = process.env.SECRET;

        const options = {
            algorithm: "HS256",
            expiresIn: "3000s"
        };

        const token = jwt.sign({email, password}, secret, options);
        console.log(token);

        return token
    }
}