import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    password: {
		type: String,
		required: true
	}},  
    { versionKey: false }
);

const User = mongoose.model("User", UserSchema);

async function authenticate (email, password) {

	const findUser = await User.findOne({ email: email });
	console.log("von frontend zu backend", email, password, findUser);
	
	if(!findUser) throw new Error("User not found");

	const isAuthenticated = bcrypt.compareSync(password, findUser.password);

	if(!isAuthenticated) throw new Error("password incorrect");
	
	return findUser;

};


export default {
	
	authenticate
}